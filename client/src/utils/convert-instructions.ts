export function convertInstructions(instructions: number): string {
  let text = 'passo para o preparo'

  instructions !== 1 && (text = 'passos para o preparo')

  return `${instructions} ${text}`
}
