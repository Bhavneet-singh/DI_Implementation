import { injectable } from 'tsyringe'
import { ILogger } from '../interfaces/ILogger'

@injectable()
export class ConsoleLogger implements ILogger {
  log(message: string): void {
    console.log(message)
  }
}
