import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import UsersToken from 'App/Models/UsersToken'
import SessionSignInValidator from '../../Validators/SignIn'
import SessionRefreshTokenValidator from '../../Validators/RefreshToken'
import AppException from 'App/Exceptions/AppException'

export default class SessionsController {
  public async signin({ request, response, auth }: HttpContextContract) {
    const { email, password } = await request.validate(SessionSignInValidator)

    const user = await User.findBy('email', email)

    if (!user) {
      throw new AppException('Credenciais inválidas', 401)
    }

    await UsersToken.query().delete().where('user_id', user.id)

    const login = await auth.use('jwt').attempt(email, password)

    return response.status(200).json({
      token: login.accessToken,
      refreshToken: login.refreshToken,
    })
  }

  public async refresh({ request, response, auth }: HttpContextContract) {
    const { authorization } = request.headers()
    const { refreshToken } = await request.validate(
      SessionRefreshTokenValidator,
    )

    if (!authorization) {
      throw new AppException('Token não encontrado', 401)
    }

    const login = await auth.use('jwt').loginViaRefreshToken(refreshToken)

    return response.status(200).json({
      token: login.accessToken,
      refreshToken: login.refreshToken,
    })
  }

  public async me({ response, auth }: HttpContextContract) {
    const { user } = auth.use('jwt').payload!

    return response.status(200).json({
      email: user.email,
    })
  }

  public async signout({ response, auth }: HttpContextContract) {
    await auth.use('jwt').logout()

    return response.status(204)
  }
}
