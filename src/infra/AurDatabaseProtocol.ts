import { PrismaClient } from '@prisma/client'

export interface AurDatabaseProtocol {
  connection: PrismaClient,
}
