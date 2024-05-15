import { schema as s, rules as r } from '@ioc:Adonis/Core/Validator'

export default class StoreNationalityValidator {
  public schema = s.create({
    name: s.string(),
    short_name: s.string([r.minLength(3), r.maxLength(3)]),
    image: s.file(),
  })
}
