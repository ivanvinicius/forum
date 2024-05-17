import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Model from 'App/Models/UsersToken'

export default class extends BaseSeeder {
  public async run() {
    await Model.createMany([
      {
        id: '1f741f1b-5117-47ff-802a-789a45f42d5c',
        name: 'JWT Access Token',
        createdAt: undefined,
        expiresAt: undefined,
        refreshTokenExpiresAt: undefined,
        refreshToken:
          '85b6f615a2fc6be64968ea0ade3da22431e9c1bbaba92683c384e158c5ff03dd',
        token:
          '9483ae21b5ff586984acb5e287aea6a57e2eda7e9d426b69cd73da61b30d5725',
        type: 'api',
        userId: 'e054f6a9-db3f-456b-bd36-f271fc3cb9c7',
      },
    ])
  }
}
