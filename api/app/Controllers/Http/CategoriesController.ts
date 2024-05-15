/*
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

import AppException from 'App/Exceptions/AppException'
import StoreCategoryValidator from 'App/Validators/StoreCategory'
import { imageDelete, imageUpload, imageValidator } from 'Utils/imageHandler'
import Category from '../../Models/Category'
import Image from 'App/Models/Image'

export default class CategoriesController {
  private RESOURCE = 'categories'

  public async indexParentCategories({
    request,
    response,
  }: HttpContextContract) {
    const { paginate = 'true', page = 1, per_page = 10 } = request.qs()

    try {
      const query = Category.query()
        .preload('image')
        .whereNull('parentId')
        .orderBy('updatedAt', 'desc')

      if (paginate === 'true') {
        const categories = await query.paginate(page, per_page)
        const { meta, data } = categories.toJSON()

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

  public async index({ request, response }: HttpContextContract) {
    const { paginate = 'true', page = 1, per_page = 10 } = request.qs()

    try {
      const query = Database.query()
        .select(
          'sub.id',
          'sub.name',
          'sub.parent_id',
          'cat.name AS parent_name',
          'img.id AS image_id',
          'img.url  AS image_url',
          'img.file_name AS image_file_name',
          'img.content_type AS image_content_type',
          'img.size AS image_size',
          'sub.created_at',
          'sub.updated_at',
        )
        .from('categories AS sub')
        .leftJoin('categories AS cat', 'sub.parent_id', 'cat.id')
        .innerJoin('images AS img', 'sub.image_id', 'img.id')
        .orderBy('updated_at', 'desc')

      if (paginate === 'true') {
        const categories = await query.paginate(page, per_page)
        const { meta, data } = categories.toJSON()

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
    let { name, parent_id: parentId } = await request.validate(
      StoreCategoryValidator,
    )

    if (!imageFile || imageFile.hasErrors) {
      throw new AppException('Verique o tamanho/formato do arquivo', 400)
    }

    if (parentId) {
      await Category.findByOrFail('id', parentId)
    } else {
      parentId = null
    }

    const categoryExists = await Category.findBy('name', name)

    if (categoryExists) {
      throw new AppException('Registro já existe', 400)
    }

    const { url, fileName, contentType, size } = await imageUpload({
      image: imageFile,
      resource: this.RESOURCE,
    })

    const trx = await Database.transaction()

    try {
      const image = new Image().useTransaction(trx)
      const category = new Category().useTransaction(trx)

      image.url = url
      image.fileName = fileName
      image.contentType = contentType
      image.size = size
      await image.save()

      category.name = name
      category.parentId = parentId
      category.imageId = image.id
      await category.save()

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
      const category = (await Category.findByOrFail('id', id)).useTransaction(
        trx,
      )

      const image = (
        await Image.findByOrFail('id', category.imageId)
      ).useTransaction(trx)

      await category.delete()
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
*/
