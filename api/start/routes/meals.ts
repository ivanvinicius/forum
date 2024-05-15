import Route from '@ioc:Adonis/Core/Route'

Route.get('meals', 'MealsController.index')

Route.group(() => {
  Route.post('meals', 'MealsController.store')
  Route.delete('meals/:id', 'MealsController.destroy')
}).middleware('auth:jwt')
