import { DifficultyType } from '~/types/difficulty'

export function convertDifficulty(difficulty: DifficultyType): string {
  const difficulties = { 1: 'fácil', 2: 'média', 3: 'difícil' }

  return `Dificuldade ${difficulties[difficulty]}`
}
