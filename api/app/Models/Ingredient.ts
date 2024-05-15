import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  beforeCreate,
  belongsTo,
  BelongsTo,
} from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

import Recipe from './Recipe'

export default class Ingredient extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public description: string

  @column()
  public recipeId: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  // ---

  @beforeCreate()
  public static createID(model: Ingredient) {
    if (!model.id) {
      model.id = uuid()
    }
  }

  @belongsTo(() => Recipe)
  public recipe: BelongsTo<typeof Recipe>
}
