import Route from '@ioc:Adonis/Core/Route'

Route.get('nutritionists', 'NutritionistsController.index')

Route.group(() => {
  Route.post('nutritionists', 'NutritionistsController.store')
  Route.delete('nutritionists/:id', 'NutritionistsController.destroy')
}).middleware('auth:jwt')
