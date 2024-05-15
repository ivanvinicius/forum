import { schema as s, rules as r } from '@ioc:Adonis/Core/Validator'

export default class SignInValidator {
  public schema = s.create({
    email: s.string([r.email()]),
    password: s.string([r.minLength(6)]),
  })
}
