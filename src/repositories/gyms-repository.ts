import { Gym } from '@prisma/client'

export interface GymsRepository {
  items: any
  findById(id: string): Promise<Gym | null>
}
