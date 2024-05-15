/*

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'categories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('name').notNullable().unique()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table
        .uuid('parent_id')
        .nullable()
        .references('categories.id')
        .onDelete('NO ACTION')
        .onUpdate('NO ACTION')

      table
        .uuid('image_id')
        .notNullable()
        .references('images.id')
        .onDelete('NO ACTION')
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
