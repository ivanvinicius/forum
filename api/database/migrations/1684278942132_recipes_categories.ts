/*

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'recipes_categories'
  
  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
      .uuid('recipe_id')
      .notNullable()
      .references('recipes.id')
      .onDelete('CASCADE')
      .onUpdate('NO ACTION')

      table
        .uuid('category_id')
        .notNullable()
        .references('categories.id')
        .onDelete('CASCADE')
        .onUpdate('NO ACTION')
      })
    }
    
    public async down() {
      this.schema.dropTable(this.tableName)
    }
  }
  */

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  //
}
