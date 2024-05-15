/* eslint-disable no-use-before-define */

/*

import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  beforeCreate,
  belongsTo,
  column,
  hasMany,
  HasMany,
  manyToMany,
  ManyToMany,
  hasOne,
  HasOne,
} from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

import Image from './Image'
import Recipe from './Recipe'

export default class Category extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  public parentId: string | null

  @column()
  public imageId: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  // ---

  @beforeCreate()
  public static createID(model: Category) {
    if (!model.id) {
      model.id = uuid()
    }
  }

  @belongsTo(() => Image)
  public image: BelongsTo<typeof Image>

  @hasOne(() => Category, { foreignKey: 'id', localKey: 'parentId' })
  public parentCategory: HasOne<typeof Category>

  @hasMany(() => Category, { foreignKey: 'parentId' })
  public subcategories: HasMany<typeof Category>

  @manyToMany(() => Recipe, { pivotTable: 'recipes_categories' }) // pivotTable has singular naming by default
  public recipes: ManyToMany<typeof Recipe>
}
 */
