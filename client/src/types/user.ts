import { Image } from './image'

export interface User {
  id: string
  name: string
  email: string
  roleId: string
  image: Image
}
