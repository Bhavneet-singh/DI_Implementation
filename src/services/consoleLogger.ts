import { injectable, inject } from 'tsyringe'
import { ILogger } from '../interfaces/ILogger'
import { IEnv } from '../interfaces/IEnv'

@injectable()
export class ConsoleLogger implements ILogger {
  constructor(
    @inject('IEnv') private env: IEnv
  ) {}

  log(message: string): void {
    const appName = this.env.get('APP_NAME')
    console.log(`[${appName}] ${message}`)
  }
}
