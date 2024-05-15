import Route from '@ioc:Adonis/Core/Route'

Route.get('recipes/dashboard', 'RecipesController.indexToDashboard')
Route.get('recipes/slug/:slug', 'RecipesController.showBySlug')
Route.get('/recipes/groups/:group/:id', 'RecipesController.indexByGroups')

Route.group(() => {
  Route.post('recipes', 'RecipesController.store')
  Route.delete('recipes/:id', 'RecipesController.destroy')
}).middleware('auth:jwt')
