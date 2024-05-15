import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { getFieldError } from '../../utils/getFieldError'

export default class ExceptionHandler extends HttpExceptionHandler {
  private MSG_VALIDATION_FAILURE = 'E_VALIDATION_FAILURE: Validation Exception'
  private MSG_REFRESH_TOKEN_INVALID = 'Invalid refresh token'
  private MSG_WRONG_PASSWORD = 'E_INVALID_AUTH_PASSWORD: Password mis-match'
  private MSG_JWS_VERIFY_FAILED =
    'JWSSignatureVerificationFailed: signature verification failed'

  private CODE_E_ROW_NOT_FOUND = 'E_ROW_NOT_FOUND'

  constructor() {
    super(Logger)
  }

  public async handle(error: any, context: HttpContextContract) {
    const handled = true
    const { response } = context

    switch (error.message) {
      case this.MSG_REFRESH_TOKEN_INVALID:
        /**
         * Quando o refreshToken está no DB, quer dizer expirado.
         * Quando o refreshToken não está no DB, quer dizer inválido
         * e isso é validado no SessionRefreshTokenValidator
         */

        return response.status(401).json({
          handled,
          message: 'Refresh token inválido',
        })
      case this.MSG_VALIDATION_FAILURE: {
        return response.status(400).json({
          handled,
          message: 'Formato inválido',
          fields: getFieldError(error.messages.errors),
        })
      }
      case this.MSG_WRONG_PASSWORD:
        return response.status(401).json({
          handled,
          message: 'Credenciais inválidas',
        })
      case this.MSG_JWS_VERIFY_FAILED:
        return response.status(401).json({
          handled,
          message: 'Token corrompido',
        })
    }

    switch (error.code) {
      case this.CODE_E_ROW_NOT_FOUND: {
        return response.status(400).json({
          handled,
          message: 'Registro não encontrado',
        })
      }

      default:
        return super.handle(error, context)
    }
  }
}
