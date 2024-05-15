import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  HasMany,
  HasOne,
  ManyToMany,
  beforeCreate,
  belongsTo,
  column,
  hasMany,
  hasOne,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify'

import Advice from './Advice'
import Nationality from './Nationality'
import Image from './Image'
import Instruction from './Instruction'
import Ingredient from './Ingredient'
import Holiday from './Holiday'
import Meal from './Meal'
// import Category from './Category'

export default class Recipe extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  @slugify({
    strategy: 'simple',
    fields: ['name'],
    allowUpdates: true,
  })
  public slug: string

  @column()
  public story: string

  @column()
  public cookingTime: number // in seconds

  @column()
  public servings: number

  @column()
  public difficulty: number

  @column()
  public nationalityId: string

  @column()
  public mealId: string

  @column()
  public imageId: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  // ---

  @beforeCreate()
  public static createID(model: Recipe) {
    if (!model.id) {
      model.id = uuid()
    }
  }

  @belongsTo(() => Nationality)
  public nationality: BelongsTo<typeof Nationality>

  @belongsTo(() => Meal)
  public meal: BelongsTo<typeof Meal>

  @belongsTo(() => Image)
  public image: BelongsTo<typeof Image>

  @hasOne(() => Advice, { foreignKey: 'recipeId' })
  public advice: HasOne<typeof Advice>

  @hasMany(() => Instruction, { foreignKey: 'recipeId' })
  public instructions: HasMany<typeof Instruction>

  @hasMany(() => Ingredient, { foreignKey: 'recipeId' })
  public ingredients: HasMany<typeof Ingredient>

  @manyToMany(() => Holiday, { pivotTable: 'recipes_holidays' }) // pivotTable has singular naming by default
  public holidays: ManyToMany<typeof Holiday>

  // @manyToMany(() => Category, { pivotTable: 'recipes_categories' }) // pivotTable has singular naming by default
  // public categories: ManyToMany<typeof Category>
}
