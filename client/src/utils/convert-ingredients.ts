export function convertIngredients(ingredients: number): string {
  let text = 'ingrediente'

  ingredients !== 1 && (text = 'ingredientes')

  return `${ingredients} ${text}`
}
