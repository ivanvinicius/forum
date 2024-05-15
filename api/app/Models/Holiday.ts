import { DateTime } from 'luxon'
import {
  BaseModel,
  ManyToMany,
  beforeCreate,
  column,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

import Recipe from './Recipe'

export default class Holiday extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public active: boolean

  @column()
  public imageId: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  // ---

  @beforeCreate()
  public static createID(model: Holiday) {
    if (!model.id) {
      model.id = uuid()
    }
  }

  @beforeCreate()
  public static setInactiveOnCreate(model: Holiday) {
    model.active = false
  }

  @manyToMany(() => Recipe, { pivotTable: 'recipes_holidays' }) // pivotTable has singular naming by default
  public recipes: ManyToMany<typeof Recipe>
}
