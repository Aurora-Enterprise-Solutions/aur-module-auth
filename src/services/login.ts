export type LoginParams = {
  username: string,
  password: string,
}

export type LoginService = (params: LoginParams) => boolean

export function login ({ username, password }: LoginParams) : boolean {
  return username === 'jesus' && password === 'clave'
}

export default login
