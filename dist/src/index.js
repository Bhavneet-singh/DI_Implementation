"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const container_1 = require("./container");
console.log("TypeScript working");
const userService = container_1.container.resolve('IUserService');
userService.createUser('Bhavneet');
