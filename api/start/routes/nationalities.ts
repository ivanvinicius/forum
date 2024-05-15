import Route from '@ioc:Adonis/Core/Route'

Route.get('nationalities', 'NationalitiesController.index')

Route.group(() => {
  Route.post('nationalities', 'NationalitiesController.store')
  Route.delete('nationalities/:id', 'NationalitiesController.destroy')
}).middleware('auth:jwt')
