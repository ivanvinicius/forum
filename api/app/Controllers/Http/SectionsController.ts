import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import StoreSectionValidator from 'App/Validators/StoreSection'
import AppException from 'App/Exceptions/AppException'
import Section from 'App/Models/Section'

export default class SectionsController {
  public async index({ request, response }: HttpContextContract) {
    const { paginate = 'true', page = 1, per_page = 10 } = request.qs()

    try {
      const query = Section.query().orderBy('updatedAt', 'desc')

      if (paginate === 'true') {
        const sections = await query.paginate(page, per_page)
        const { meta, data } = sections.toJSON()

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
    const { name } = await request.validate(StoreSectionValidator)

    const sectionExists = await Section.findBy('name', name)

    if (sectionExists) {
      throw new AppException('Registro já existe', 400)
    }

    try {
      await Section.create({ name })

      return response.status(201)
    } catch {
      throw new AppException('Erro desconhecido', 500)
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const section = await Section.findByOrFail('id', id)

    await section.delete()

    return response.status(200)
  }
}
