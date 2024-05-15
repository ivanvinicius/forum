import Route from '@ioc:Adonis/Core/Route'

Route.post('/users', 'UsersController.signup')

Route.group(() => {
  Route.get('/users', 'UsersController.index')
}).middleware('auth:jwt')
