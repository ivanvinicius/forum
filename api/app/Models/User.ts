import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  HasOne,
  beforeCreate,
  beforeSave,
  belongsTo,
  column,
  hasOne,
} from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import { v4 as uuid } from 'uuid'

import Nutritionist from './Nutritionist'
import Role from './Role'
import UsersToken from './UsersToken'
import Image from './Image'

export default class User extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public roleId: string

  @column()
  public imageId: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  // ---

  @beforeCreate()
  public static createID(model: User) {
    if (!model.id) {
      model.id = uuid()
    }
  }

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @belongsTo(() => Role)
  public role: BelongsTo<typeof Role>

  @belongsTo(() => Image)
  public image: BelongsTo<typeof Image>

  @hasOne(() => Nutritionist, { foreignKey: 'userId' })
  public nutritionist: HasOne<typeof Nutritionist>

  @hasOne(() => UsersToken, { foreignKey: 'userId' })
  public usersToken: HasOne<typeof UsersToken>
}
