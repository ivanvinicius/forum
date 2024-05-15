import { schema as s } from '@ioc:Adonis/Core/Validator'

export default class StoreHolidayValidator {
  public schema = s.create({
    name: s.string(),
    description: s.string(),
  })
}
