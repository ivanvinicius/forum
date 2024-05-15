import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'recipes_holidays'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('recipe_id')
        .notNullable()
        .references('recipes.id')
        .onDelete('CASCADE')
        .onUpdate('NO ACTION')

      table
        .uuid('holiday_id')
        .notNullable()
        .references('holidays.id')
        .onDelete('CASCADE')
        .onUpdate('NO ACTION')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
