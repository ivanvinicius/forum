import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import StoreHolidayValidator from 'App/Validators/StoreHoliday'
import AppException from 'App/Exceptions/AppException'
import Holiday from 'App/Models/Holiday'

export default class HolidaysController {
  public async index({ request, response }: HttpContextContract) {
    const {
      active = 'false',
      paginate = 'true',
      page = 1,
      per_page = 10,
    } = request.qs()

    try {
      const query = Holiday.query().orderBy('updatedAt', 'desc')

      if (active === 'true') {
        query.where('active', true)
      }

      if (paginate === 'true') {
        const holidays = await query.paginate(page, per_page)
        const { meta, data } = holidays.toJSON()

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
    const { name, description } = await request.validate(StoreHolidayValidator)

    const holidayExists = await Holiday.findBy('name', name)

    if (holidayExists) {
      throw new AppException('Registro já existe', 400)
    }

    try {
      await Holiday.create({ name, description })

      return response.status(201)
    } catch {
      throw new AppException('Erro desconhecido', 500)
    }
  }

  public async changeStatus({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const holiday = await Holiday.findByOrFail('id', id)

    try {
      await holiday.merge({ active: !holiday.$getAttribute('active') }).save()

      return response.status(200)
    } catch {
      throw new AppException('Erro desconhecido', 500)
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const holiday = await Holiday.findByOrFail('id', id)

    await holiday.delete()

    return response.status(200)
  }
}
