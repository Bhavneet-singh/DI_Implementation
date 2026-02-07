import { container } from 'tsyringe'

import { ILogger } from './interfaces/ILogger'
import { IUserService } from './interfaces/IUserService'
import { IEnv } from './interfaces/IEnv'

import { ConsoleLogger } from './services/consoleLogger'
import { UserService } from './services/userService'
import { EnvService } from './services/envService'

// Environment → singleton
container.registerSingleton<IEnv>('IEnv', EnvService)

// Logger → singleton
container.registerSingleton<ILogger>('ILogger', ConsoleLogger)

// User service → singleton
container.registerSingleton<IUserService>('IUserService', UserService)

export { container }
