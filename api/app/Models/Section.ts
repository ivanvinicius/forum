import { DateTime } from 'luxon'
import {
  BaseModel,
  HasMany,
  beforeCreate,
  column,
  hasMany,
} from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

import Instruction from './Instruction'

export default class Section extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  // ---

  @beforeCreate()
  public static createID(model: Section) {
    if (!model.id) {
      model.id = uuid()
    }
  }

  @hasMany(() => Instruction, { foreignKey: 'sectionId' })
  public instructions: HasMany<typeof Instruction>
}
