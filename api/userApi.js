const express = require('express')
const userService = require('../service/userService')
const userSignupMiddleware = require('../middleware/userSignupMiddleware')
const loginMiddleware = require('../middleware/LoginMiddleware')
const roleValidationMiddleware = require('../middleware/roleValidationMiddleware');

const userApi = express.Router()

userApi.post('/signup', [userSignupMiddleware.userSignupValidation], userService.createUserService)

userApi.post('/login', [loginMiddleware.loginValidation], userService.loginUserService)

userApi.post('/logout', [roleValidationMiddleware.isAuthenticated, roleValidationMiddleware.customerValidation], userService.logoutUserService)

// To update the address
userApi.patch('/user/:id', [roleValidationMiddleware.isAuthenticated, roleValidationMiddleware.customerValidation], userService.updateUserService)    

userApi.delete('/user/:id', [roleValidationMiddleware.isAuthenticated, roleValidationMiddleware.customerValidation], userService.removeUserService)

userApi.get('/user/:id', userService.getSingleUserService);

userApi.get('/user', userService.getUserService) // get all the users

// userApi.delete('/user', userService.deleteUserService) // Delete all users

module.exports = userApi