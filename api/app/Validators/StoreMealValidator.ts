import { schema as s } from '@ioc:Adonis/Core/Validator'

export default class StoreMealValidator {
  public schema = s.create({
    name: s.string(),
  })
}
