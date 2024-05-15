import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  beforeCreate,
  belongsTo,
  column,
  hasMany,
  HasMany,
} from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

import User from './User'
import Advice from './Advice'

export default class Nutritionist extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public instagram: string

  @column()
  public userId: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  // ---

  @beforeCreate()
  public static createID(model: Nutritionist) {
    if (!model.id) {
      model.id = uuid()
    }
  }

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasMany(() => Advice, { foreignKey: 'nutritionistId' })
  public advices: HasMany<typeof Advice>
}
