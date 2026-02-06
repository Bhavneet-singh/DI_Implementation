import 'reflect-metadata'
import { ConsoleLogger } from '../src/services/consoleLogger'
import { IEnv } from '../src/interfaces/IEnv'

describe('ConsoleLogger', () => {
  it('should prefix logs with app name', () => {
    const envMock: IEnv = {
      get: jest.fn().mockReturnValue('TEST_APP')
    }

    const logger = new ConsoleLogger(envMock)

    console.log = jest.fn()

    logger.log('Hello')

    expect(console.log).toHaveBeenCalledWith('[TEST_APP] Hello')
  })
})
