import 'reflect-metadata'
import { container } from './container'
import { IUserService } from './interfaces/IUserService'
import "dotenv/config"

console.log("TypeScript working");

const userService = container.resolve<IUserService>('IUserService')

userService.createUser('Bhavneet')
