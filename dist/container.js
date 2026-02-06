"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const tsyringe_1 = require("tsyringe");
Object.defineProperty(exports, "container", { enumerable: true, get: function () { return tsyringe_1.container; } });
const consoleLogger_1 = require("./services/consoleLogger");
const userService_1 = require("./services/userService");
tsyringe_1.container.register('ILogger', {
    useClass: consoleLogger_1.ConsoleLogger
});
tsyringe_1.container.register('IUserService', {
    useClass: userService_1.UserService
});
