import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Meal from 'App/Models/Meal'

export default class extends BaseSeeder {
  public async run() {
    await Meal.createMany([
      { id: '7dfbd35d-20b4-454c-8d40-7ee0c3eb7865', name: 'Café da manhã' },
      { id: 'cabb452a-8e40-4b35-ab8e-1f56aadeed7a', name: 'Almoço' },
      { id: '017830f6-e325-4440-ae75-759f9fe38414', name: 'Café da tarde' },
      { id: '56483d7f-b5ee-45cb-8bd1-0ce3d3802260', name: 'Jantar' },
    ])
  }
}
