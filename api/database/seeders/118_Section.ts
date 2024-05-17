import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Model from 'App/Models/Section'

export default class extends BaseSeeder {
  public async run() {
    await Model.createMany([
      {
        id: 'd5483654-6560-4a13-ae55-f6facfce4499',
        name: 'Base',
      },
    ])
  }
}
