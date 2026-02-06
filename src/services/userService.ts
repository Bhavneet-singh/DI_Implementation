import { injectable, inject } from 'tsyringe'
import { ILogger } from '../interfaces/ILogger'
import { IUserService } from '../interfaces/IUserService'

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject('ILogger') private logger: ILogger
  ) {}

  createUser(name: string): string {
    const msg = `User ${name} created`
    this.logger.log(msg)
    return msg
  }
}
