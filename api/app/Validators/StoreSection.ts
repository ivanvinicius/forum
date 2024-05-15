import { schema as s } from '@ioc:Adonis/Core/Validator'

export default class StoreSectionValidator {
  public schema = s.create({
    name: s.string(),
  })
}
