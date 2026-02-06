import { container } from 'tsyringe'
import { ILogger } from './interfaces/ILogger'
import { ConsoleLogger } from './services/consoleLogger'
import { IUserService } from './interfaces/IUserService'
import { UserService } from './services/userService'
container.register<ILogger>('ILogger', {
  useClass: ConsoleLogger
})

container.register<IUserService>('IUserService', {
  useClass: UserService
})

export { container }
