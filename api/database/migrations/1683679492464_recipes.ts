import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'recipes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('slug').notNullable().unique()
      table.string('name').notNullable()
      table.text('story').notNullable()
      table.integer('cooking_time').notNullable() // in seconds
      table.integer('servings').notNullable()
      table.integer('difficulty').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table
        .uuid('nationality_id')
        .notNullable()
        .references('nationalities.id')
        .onDelete('NO ACTION')
        .onUpdate('NO ACTION')

      table
        .uuid('image_id')
        .notNullable()
        .references('images.id')
        .onDelete('NO ACTION')
        .onUpdate('NO ACTION')

      table
        .uuid('meal_id')
        .nullable()
        .references('meals.id')
        .onDelete('NO ACTION')
        .onUpdate('NO ACTION')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
