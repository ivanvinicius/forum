import Route from '@ioc:Adonis/Core/Route'

Route.get('holidays', 'HolidaysController.index')

Route.group(() => {
  Route.post('holidays', 'HolidaysController.store')
  Route.patch('holidays/:id', 'HolidaysController.changeStatus')
  Route.delete('holidays/:id', 'HolidaysController.destroy')
}).middleware('auth:jwt')
