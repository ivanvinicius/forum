import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import AppException from 'App/Exceptions/AppException'
import Meal from 'App/Models/Meal'
import StoreMealValidator from 'App/Validators/StoreMealValidator'

export default class MealsController {
  public async index({ request, response }: HttpContextContract) {
    const { paginate = 'true', page = 1, per_page = 10 } = request.qs()

    try {
      const query = Meal.query().orderBy('updatedAt', 'desc')

      if (paginate === 'true') {
        const meals = await query.paginate(page, per_page)
        const { meta, data } = meals.toJSON()

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
    const { name } = await request.validate(StoreMealValidator)

    const mealExists = await Meal.findBy('name', name)

    if (mealExists) {
      throw new AppException('Registro já existe', 400)
    }

    try {
      await Meal.create({ name })

      return response.status(201)
    } catch {
      throw new AppException('Erro desconhecido', 500)
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const section = await Meal.findByOrFail('id', id)

    await section.delete()

    return response.status(200)
  }
}
