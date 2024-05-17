import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Model from 'App/Models/Ingredient'

export default class extends BaseSeeder {
  public async run() {
    await Model.createMany([
      {
        id: '7a1b6858-362a-40e7-bbe1-4258a08bdae2',
        description: '1 chester perdigão',
        recipeId: '25c4d83b-394a-4d97-bbc3-eba607fe5df4',
      },
    ])
  }
}
