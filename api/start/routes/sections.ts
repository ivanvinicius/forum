import Route from '@ioc:Adonis/Core/Route'

Route.get('sections', 'SectionsController.index')

Route.group(() => {
  Route.post('sections', 'SectionsController.store')
  Route.delete('sections/:id', 'SectionsController.destroy')
}).middleware('auth:jwt')
