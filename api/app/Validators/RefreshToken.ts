import {
  schema as s,
  rules as r,
  CustomMessages,
} from '@ioc:Adonis/Core/Validator'

export default class RefreshTokenValidator {
  public schema = s.create({
    refreshToken: s.string({}, [
      r.exists({ table: 'users_tokens', column: 'refresh_token' }),
    ]),
  })

  public messages: CustomMessages = {
    'refreshToken.exists': 'Refresh token inválido (db)',
  }
}
