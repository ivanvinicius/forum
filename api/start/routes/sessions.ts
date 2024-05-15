import Route from '@ioc:Adonis/Core/Route'

Route.post('/signin', 'SessionsController.signin')
Route.post('/refresh', 'SessionsController.refresh')

Route.group(() => {
  Route.get('/me', 'SessionsController.me')
  Route.delete('/signout', 'SessionsController.signout')
}).middleware('auth:jwt')
