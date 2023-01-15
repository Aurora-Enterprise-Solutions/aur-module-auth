import { LoginService } from '../services/login'

export interface AuthServicesProtocol {
  get login(): LoginService
}
