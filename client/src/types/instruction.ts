import { Section } from './section'

export interface Instruction {
  id: string
  description: string
  section: Section
}
