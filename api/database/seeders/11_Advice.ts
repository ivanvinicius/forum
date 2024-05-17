import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Model from 'App/Models/Advice'

export default class extends BaseSeeder {
  public async run() {
    await Model.createMany([
      {
        id: '0294e46d-82d4-4d75-a543-cc64d995db66',
        description:
          'Nutricionista indica essa receita apenas para festas e finais de semana',
        nutritionistId: 'f75686fd-dacf-4562-9470-3a8219737c98',
        recipeId: '25c4d83b-394a-4d97-bbc3-eba607fe5df4',
      },
    ])
  }
}
