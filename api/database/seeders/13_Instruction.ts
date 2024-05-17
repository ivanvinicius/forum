import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Model from 'App/Models/Instruction'

export default class extends BaseSeeder {
  public async run() {
    await Model.createMany([
      {
        id: '8350fd4f-9b3a-4450-9ba3-788ce79b125b',
        description: 'Primeiro passo é assar',
        sectionId: 'd5483654-6560-4a13-ae55-f6facfce4499',
        recipeId: '25c4d83b-394a-4d97-bbc3-eba607fe5df4',
      },
    ])
  }
}
