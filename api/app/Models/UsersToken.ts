import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'

import User from './User'

export default class UsersToken extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public userId: string

  @column()
  public name: string

  @column()
  public type: string

  @column()
  public token: string

  @column.dateTime({ autoCreate: true })
  public expiresAt: DateTime

  @column()
  public refreshToken: string

  @column.dateTime({ autoCreate: true })
  public refreshTokenExpiresAt: DateTime

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  // ---

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
