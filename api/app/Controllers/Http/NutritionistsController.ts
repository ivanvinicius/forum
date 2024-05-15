import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import AppException from 'App/Exceptions/AppException'
import StoreNutritionistValidator from 'App/Validators/StoreNutritionist'

import Nutritionist from 'App/Models/Nutritionist'
import Database from '@ioc:Adonis/Lucid/Database'

export default class NutritionistsController {
  public async index({ request, response }: HttpContextContract) {
    const { paginate = 'true', page = 1, per_page = 10 } = request.qs()

    try {
      const query = Database.query()
        .select(
          'nutri.id',
          'nutri.instagram',
          'user.id AS user_id',
          'user.name AS user_name',
          'user.email AS user_email',
          'img.id AS image_id',
          'img.url AS image_url',
          'img.file_name AS image_file_name',
          'img.content_type AS image_content_type',
          'img.size AS image_size',
          'nutri.created_at',
          'nutri.updated_at',
        )
        .from('nutritionists AS nutri')
        .innerJoin('users AS user', 'nutri.user_id', 'user.id')
        .innerJoin('images AS img', 'user.image_id', 'img.id')
        .orderBy('updated_at', 'desc')

      if (paginate === 'true') {
        const nutritionists = await query.paginate(page, per_page)
        const { meta, data } = nutritionists.toJSON()

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
    const { user_id: userId, instagram } = await request.validate(
      StoreNutritionistValidator,
    )

    const nutriExists = await Nutritionist.findBy('userId', userId)

    if (nutriExists) {
      throw new AppException('Registro já existe', 400)
    }

    try {
      await Nutritionist.create({ userId, instagram })

      return response.status(201)
    } catch {
      throw new AppException('Erro desconhecido', 500)
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const nutritionist = await Nutritionist.findByOrFail('id', id)

    await nutritionist.delete()

    return response.status(200)
  }
}
