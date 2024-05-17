import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  beforeCreate,
  belongsTo,
  column,
} from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

import Nutritionist from './Nutritionist'
import Recipe from './Recipe'

export default class Advice extends BaseModel {
  public static table = 'advices'
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public description: string

  @column()
  public nutritionistId: string

  @column()
  public recipeId: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  // ---

  @beforeCreate()
  public static createID(model: Advice) {
    if (!model.id) {
      model.id = uuid()
    }
  }

  @belongsTo(() => Nutritionist)
  public nutritionist: BelongsTo<typeof Nutritionist>

  @belongsTo(() => Recipe)
  public recipe: BelongsTo<typeof Recipe>
}
