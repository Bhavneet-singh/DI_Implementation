"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const userService_1 = require("../src/services/userService");
describe('UserService', () => {
    it('should create user and call logger', () => {
        const loggerMock = {
            log: jest.fn()
        };
        const service = new userService_1.UserService(loggerMock);
        const result = service.createUser('TestUser');
        expect(result).toBe('User TestUser created');
        expect(loggerMock.log).toHaveBeenCalledWith('User TestUser created');
    });
});
