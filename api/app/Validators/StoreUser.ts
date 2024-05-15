import { schema as s, rules as r } from '@ioc:Adonis/Core/Validator'

export default class StoreUserValidator {
  public schema = s.create({
    token: s.string([r.uuid({ version: 4 })]),
    name: s.string(),
    email: s.string([r.email()]),
    password: s.string([r.minLength(6)]),
  })
}
