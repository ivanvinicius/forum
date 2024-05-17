import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Model from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await Model.createMany([
      {
        id: 'e054f6a9-db3f-456b-bd36-f271fc3cb9c7',
        name: 'ivan',
        email: 'ivan@gmail.com',
        password:
          '$scrypt$n=16384,r=8,p=1$mdBgKL7G5inxaaF+QhJpgA$JSpRpDYJQjO536AjoAxX0dAaw3xX5bD3QQXbDl/RDK5UD6mpNjx7iBFJrChWK56PM+SH1wd8EmDwG3OrC/PEWg',
        roleId: '9e8f1dc1-2dd4-4d33-9518-f7fc56e73124',
        imageId: 'e4b922d3-2700-453b-bbfc-5cdfc11196c6',
      },
    ])
  }
}
