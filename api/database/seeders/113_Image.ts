import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Model from 'App/Models/Image'

export default class extends BaseSeeder {
  public async run() {
    await Model.createMany([
      {
        id: 'e4b922d3-2700-453b-bbfc-5cdfc11196c6',
        url: 'localhost:3333/uploads/users/f37b8970f1f836ec84bf-ivan.png',
        fileName: 'f37b8970f1f836ec84bf-ivan.png',
        contentType: 'image/png',
        size: 67775,
      },
      {
        id: 'd6c82c6d-ef2a-4722-bef1-baef3d616954',
        url: 'localhost:3333/uploads/nationalities/1ccaabce404b22096438-bra.png',
        fileName: '1ccaabce404b22096438-bra.png',
        contentType: 'image/png',
        size: 28096,
      },
      {
        id: 'f800e489-d036-4d25-a4bb-a114c6d82837',
        url: 'localhost:3333/uploads/recipes/6e98fb9bf7b5dbfb4a16-cake.png',
        fileName: '6e98fb9bf7b5dbfb4a16-cake.png',
        contentType: 'image/png',
        size: 335057,
      },
    ])
  }
}
