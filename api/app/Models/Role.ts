import { DateTime } from 'luxon'
import {
  BaseModel,
  HasOne,
  ManyToMany,
  beforeCreate,
  column,
  hasOne,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

import User from './User'
import Permission from './Permission'

export default class Role extends BaseModel {
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
  public static createID(model: Role) {
    if (!model.id) {
      model.id = uuid()
    }
  }

  @hasOne(() => User, { foreignKey: 'roleId' })
  public user: HasOne<typeof User>

  @manyToMany(() => Permission, { pivotTable: 'roles_permissions' }) // pivotTable has singular naming by default
  public permissions: ManyToMany<typeof Permission>
}
