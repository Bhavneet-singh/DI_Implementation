import { container } from 'tsyringe'

import { ILogger } from './interfaces/ILogger'
import { IUserService } from './interfaces/IUserService'
import { IEnv } from './interfaces/IEnv'

import { ConsoleLogger } from './services/consoleLogger'
import { UserService } from './services/userService'
import { EnvService } from './services/envService'

container.register<IEnv>('IEnv', {
  useClass: EnvService
})

container.register<ILogger>('ILogger', {
  useClass: ConsoleLogger
})

container.register<IUserService>('IUserService', {
  useClass: UserService
})

export { container }
