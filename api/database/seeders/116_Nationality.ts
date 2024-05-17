import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Model from 'App/Models/Nationality'

export default class extends BaseSeeder {
  public async run() {
    await Model.createMany([
      {
        id: 'c6fe7516-9db8-4650-bc6f-26f4454dba93',
        name: 'Brasil',
        shortName: 'BRA',
        imageId: 'd6c82c6d-ef2a-4722-bef1-baef3d616954',
      },
    ])
  }
}
