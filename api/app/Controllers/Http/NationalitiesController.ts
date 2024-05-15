import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

import AppException from 'App/Exceptions/AppException'
import StoreNationalityValidator from 'App/Validators/StoreNationality'
import { imageValidator, imageUpload, imageDelete } from 'Utils/imageHandler'
import Nationality from '../../Models/Nationality'
import Image from 'App/Models/Image'

export default class NationalitiesController {
  private RESOURCE = 'nationalities'

  public async index({ request, response }: HttpContextContract) {
    const { paginate = 'true', page = 1, per_page = 10 } = request.qs()

    try {
      const query = Nationality.query()
        .preload('image')
        .orderBy('updatedAt', 'desc')

      if (paginate === 'true') {
        const nationalities = await query.paginate(page, per_page)
        const { meta, data } = nationalities.toJSON()

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

  public async store({ request, response }: HttpContextContract) {
    const imageFile = request.file('image', imageValidator)
    const { name, short_name: shortName } = await request.validate(
      StoreNationalityValidator,
    )

    if (!imageFile || imageFile.hasErrors) {
      throw new AppException('Verique o tamanho/formato do arquivo', 400)
    }

    const nationalityExists = await Nationality.findBy('name', name)

    if (nationalityExists) {
      throw new AppException('Registro já existe', 400)
    }

    const { url, fileName, contentType, size } = await imageUpload({
      image: imageFile,
      resource: this.RESOURCE,
    })

    const trx = await Database.transaction()

    try {
      const image = new Image().useTransaction(trx)
      const nationality = new Nationality().useTransaction(trx)

      image.url = url
      image.fileName = fileName
      image.contentType = contentType
      image.size = size
      await image.save()

      nationality.name = name
      nationality.shortName = shortName
      nationality.imageId = image.id
      await nationality.save()

      await trx.commit()

      return response.status(201)
    } catch {
      await imageDelete({ fileName, resource: this.RESOURCE })
      await trx.rollback()

      throw new AppException('Erro desconhecido', 500)
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()
    const trx = await Database.transaction()

    try {
      const nationality = (
        await Nationality.findByOrFail('id', id)
      ).useTransaction(trx)

      const image = (
        await Image.findByOrFail('id', nationality.imageId)
      ).useTransaction(trx)

      await nationality.delete()
      await image.delete()
      await imageDelete({ fileName: image.fileName, resource: this.RESOURCE })
      await trx.commit()

      return response.status(200)
    } catch {
      await trx.rollback()

      throw new AppException('Erro desconhecido', 500)
    }
  }
}
