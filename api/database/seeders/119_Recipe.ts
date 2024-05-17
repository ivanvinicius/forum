import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Model from 'App/Models/Recipe'

export default class extends BaseSeeder {
  public async run() {
    await Model.createMany([
      {
        id: '25c4d83b-394a-4d97-bbc3-eba607fe5df4',
        cookingTime: 12000,
        difficulty: 3,
        imageId: 'f800e489-d036-4d25-a4bb-a114c6d82837',
        mealId: '017830f6-e325-4440-ae75-759f9fe38414',
        name: 'Chester perdigão',
        nationalityId: 'c6fe7516-9db8-4650-bc6f-26f4454dba93',
        servings: 12,
        slug: 'chester',
        story: 'História do Chester perdigão',
        createdAt: undefined,
        updatedAt: undefined,
      },
    ])
  }
}
