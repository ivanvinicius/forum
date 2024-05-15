import { DateTime } from 'luxon'
import {
  BaseModel,
  HasOne,
  beforeCreate,
  column,
  hasOne,
} from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

import Nationality from './Nationality'
// import Category from './Category'
import Recipe from './Recipe'

import User from './User'

export default class Image extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public url: string

  @column()
  public fileName: string

  @column()
  public contentType: string

  @column()
  public size: number

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  // ---

  @beforeCreate()
  public static createID(model: Image) {
    if (!model.id) {
      model.id = uuid()
    }
  }

  @hasOne(() => Nationality, { foreignKey: 'imageId' })
  public nationality: HasOne<typeof Nationality>

  // @hasOne(() => Category, { foreignKey: 'imageId' })
  // public category: HasOne<typeof Category>

  @hasOne(() => User, { foreignKey: 'imageId' })
  public user: HasOne<typeof User>

  @hasOne(() => Recipe, { foreignKey: 'imageId' })
  public recipe: HasOne<typeof Recipe>
}
