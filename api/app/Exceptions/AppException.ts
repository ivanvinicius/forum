import { Exception } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AppException extends Exception {
  constructor(message: string, status: number, code?: string | undefined) {
    super(message, status, code)
  }

  public async handle(err: this, ctx: HttpContextContract) {
    const { status, code, message } = err

    ctx.response.status(status).json({
      handled: true,
      code,
      message: message.split(': ').pop(),
    })
  }
}
