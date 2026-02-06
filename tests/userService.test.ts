import 'reflect-metadata'
import { UserService } from '../src/services/userService'
import { ILogger } from '../src/interfaces/ILogger'

describe('UserService', () => {
  it('should create user and call logger', () => {
    const loggerMock: ILogger = {
      log: jest.fn()
    }

    const service = new UserService(loggerMock)

    const result = service.createUser('TestUser')

    expect(result).toBe('User TestUser created')
    expect(loggerMock.log).toHaveBeenCalled()
  })
})

