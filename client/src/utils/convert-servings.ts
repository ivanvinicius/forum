export function convertServings(servings: number): string {
  let text = 'porção'

  servings !== 1 && (text = 'porções')

  return `${servings} ${text}`
}
