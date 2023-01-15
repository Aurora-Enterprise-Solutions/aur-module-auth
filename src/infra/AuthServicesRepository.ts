import loginService from '../services/login'
import { AuthServicesProtocol } from './AuthServicesProtocol'

export class AuthServicesRepository implements AuthServicesProtocol {
  get login () {
    return loginService
  }
}

export default AuthServicesRepository
