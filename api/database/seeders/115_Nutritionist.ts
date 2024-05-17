import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Model from 'App/Models/Nutritionist'

export default class extends BaseSeeder {
  public async run() {
    await Model.createMany([
      {
        id: 'f75686fd-dacf-4562-9470-3a8219737c98',
        instagram: 'ivanboneti',
        userId: 'e054f6a9-db3f-456b-bd36-f271fc3cb9c7',
      },
    ])
  }
}
