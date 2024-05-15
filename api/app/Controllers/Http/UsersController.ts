import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { imageDelete, imageUpload, imageValidator } from 'Utils/imageHandler'
import StoreUserValidator from 'App/Validators/StoreUser'
import AppException from 'App/Exceptions/AppException'
import Database from '@ioc:Adonis/Lucid/Database'
import Image from 'App/Models/Image'
import User from 'App/Models/User'

export default class UsersController {
  private RESOURCE = 'users'

  public async index({ request, response }: HttpContextContract) {
    const { paginate = 'true', page = 1, per_page = 10 } = request.qs()

    try {
      const query = User.query().preload('image').orderBy('updatedAt', 'desc')

      if (paginate === 'true') {
        const users = await query.paginate(page, per_page)
        const { meta, data } = users.toJSON()

        return response
          .status(200)
          .header('x-total-count', meta.total)
          .json(data)
      }

      return response.status(200).json(await query)
    } catch {
      throw new AppException('Erro desconhecido', 500)
    }
  }

  public async signup({ request, response }: HttpContextContract) {
    const requestBody = await request.validate(StoreUserValidator)
    const imageFile = request.file('image', imageValidator)
    const trx = await Database.transaction()
    const userToken = process.env.USER_TOKEN

    if (requestBody.token !== userToken) {
      throw new AppException('Credenciais inválidas', 400)
    }

    if (!imageFile || imageFile.hasErrors) {
      throw new AppException('Verique o tamanho/formato do arquivo', 400)
    }

    const userExists = await User.findBy('email', requestBody.email)

    if (userExists) {
      throw new AppException('Registro já existe', 400)
    }

    const { url, fileName, contentType, size } = await imageUpload({
      image: imageFile,
      resource: this.RESOURCE,
    })

    try {
      const image = new Image().useTransaction(trx)
      const user = new User().useTransaction(trx)

      image.url = url
      image.fileName = fileName
      image.contentType = contentType
      image.size = size
      await image.save()

      user.name = requestBody.name
      user.email = requestBody.email
      user.password = requestBody.password
      user.imageId = image.id
      user.roleId = '9e8f1dc1-2dd4-4d33-9518-f7fc56e73124'
      await user.save()

      trx.commit()

      return response.status(201)
    } catch {
      await imageDelete({ fileName, resource: this.RESOURCE })
      trx.rollback()
      throw new AppException('Erro desconhecido', 500)
    }
  }
}
