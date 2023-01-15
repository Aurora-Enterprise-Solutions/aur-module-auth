import { AuthModuleProps } from '../types'
import AurDatabaseClient from './AurDatabaseClient'
import { AuthServicesProtocol } from './AuthServicesProtocol'
import AuthServicesRepository from './AuthServicesRepository'

export class AuthModule {
  constructor ({ database }: AuthModuleProps) {
    // setup database client
    AurDatabaseClient.connection = database.connection

    this.services = new AuthServicesRepository()
  }

  public services: AuthServicesProtocol
}

export default AuthModule
