import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Role from 'App/Models/Role'

export default class extends BaseSeeder {
  public async run() {
    await Role.createMany([
      { id: '9e8f1dc1-2dd4-4d33-9518-f7fc56e73124', name: 'Manager' },
    ])
  }
}
