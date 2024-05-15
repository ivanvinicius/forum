import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'roles_permissions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('role_id')
        .notNullable()
        .references('roles.id')
        .onDelete('CASCADE')
        .onUpdate('NO ACTION')

      table
        .uuid('permission_id')
        .notNullable()
        .references('permissions.id')
        .onDelete('CASCADE')
        .onUpdate('NO ACTION')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
