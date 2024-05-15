import { schema as s, rules as r } from '@ioc:Adonis/Core/Validator'

export default class StoreNutritionistValidator {
  public schema = s.create({
    user_id: s.string([r.uuid()]),
    instagram: s.string(),
  })
}
