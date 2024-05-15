import { schema as s, rules as r } from '@ioc:Adonis/Core/Validator'

export default class StoreCategoryValidator {
  public schema = s.create({
    name: s.string(),
    parent_id: s.string.nullable([r.uuid()]),
    image: s.file(),
  })
}
