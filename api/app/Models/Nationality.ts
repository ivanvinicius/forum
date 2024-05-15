import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  beforeCreate,
  belongsTo,
  BelongsTo,
  hasMany,
  HasMany,
} from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

import Image from './Image'
import Recipe from './Recipe'

export default class Nationality extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  public shortName: string

  @column()
  public imageId: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  // ---

  @beforeCreate()
  public static createID(model: Nationality) {
    if (!model.id) {
      model.id = uuid()
    }
  }

  @beforeCreate()
  public static shortNameUpperCase(model: Nationality) {
    model.shortName = model.shortName.toUpperCase()
  }

  @belongsTo(() => Image)
  public image: BelongsTo<typeof Image>

  @hasMany(() => Recipe, { foreignKey: 'nationalityId' })
  public recipe: HasMany<typeof Recipe>
}
