import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users_tokens'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()'))
      table.string('name').notNullable()
      table.string('type').notNullable()
      table.string('token').notNullable().unique()
      table.timestamp('expires_at', { useTz: true }).nullable()
      table.string('refresh_token').notNullable().unique().index()
      table.timestamp('refresh_token_expires_at', { useTz: true }).notNullable()
      table.timestamp('created_at', { useTz: true }).notNullable()

      table
        .uuid('user_id')
        .notNullable()
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('NO ACTION')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
