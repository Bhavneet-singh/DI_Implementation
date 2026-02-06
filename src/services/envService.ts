import { injectable } from 'tsyringe'
import { IEnv } from '../interfaces/IEnv'

@injectable()
export class EnvService implements IEnv {
  get(key: string): string {
    const value = process.env[key]
    if (!value) {
      throw new Error(`Missing env variable: ${key}`)
    }
    return value
  }
}
