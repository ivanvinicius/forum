import { DateTime } from 'luxon'
import {
  BaseModel,
  beforeCreate,
  BelongsTo,
  belongsTo,
  column,
} from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

import Section from './Section'
import Recipe from './Recipe'

export default class Instruction extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public description: string

  @column()
  public recipeId: string

  @column()
  public sectionId: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  // ---

  @beforeCreate()
  public static createID(model: Instruction) {
    if (!model.id) {
      model.id = uuid()
    }
  }

  @belongsTo(() => Recipe)
  public recipe: BelongsTo<typeof Recipe>

  @belongsTo(() => Section)
  public section: BelongsTo<typeof Section>
}
