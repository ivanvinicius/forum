import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  beforeCreate,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

import Role from './Role'

export default class Permission extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  // ---

  @beforeCreate()
  public static createID(model: Permission) {
    if (!model.id) {
      model.id = uuid()
    }
  }

  @manyToMany(() => Role, { pivotTable: 'roles_permissions' }) // pivotTable has singular naming by default
  public roles: ManyToMany<typeof Role>
}
