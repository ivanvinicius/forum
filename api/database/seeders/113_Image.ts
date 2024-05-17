import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Model from 'App/Models/Image'

export default class extends BaseSeeder {
  public async run() {
    await Model.createMany([
      {
        id: 'e4b922d3-2700-453b-bbfc-5cdfc11196c6',
        url: 'localhost:3333/uploads/users/2e9b2ebe1c65d6f3b4df-ivan.png',
        fileName: '2e9b2ebe1c65d6f3b4df-ivan.png',
        contentType: 'image/png',
        size: 67775,
      },
      {
        id: 'd6c82c6d-ef2a-4722-bef1-baef3d616954',
        url: 'localhost:3333/uploads/nationalities/4f41159724aec67eaf1d-bra.png',
        fileName: '4f41159724aec67eaf1d-bra.png',
        contentType: 'image/png',
        size: 28096,
      },
      {
        id: 'f800e489-d036-4d25-a4bb-a114c6d82837',
        url: 'localhost:3333/uploads/recipes/cd93c9d33f7c34973727-chester.png',
        fileName: 'cd93c9d33f7c34973727-chester.png',
        contentType: 'image/png',
        size: 335057,
      },
    ])
  }
}
