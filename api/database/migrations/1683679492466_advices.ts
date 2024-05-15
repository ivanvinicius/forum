import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'advices'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.text('description').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table
        .uuid('nutritionist_id')
        .notNullable()
        .references('nutritionists.id')
        .onDelete('NO ACTION')
        .onUpdate('NO ACTION')

      table
        .uuid('recipe_id')
        .notNullable()
        .references('recipes.id')
        .onDelete('CASCADE')
        .onUpdate('NO ACTION')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
