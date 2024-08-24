const express = require('express')
const userService = require('../service/userService')
const userSignupMiddleware = require('../middleware/userSignupMiddleware')
const loginMiddleware = require('../middleware/LoginMiddleware')
const roleValidationMiddleware = require('../middleware/roleValidationMiddleware');


const userApi = express.Router()

userApi.post('/signup',[userSignupMiddleware.userSignupValidation], userService.createUserService)

userApi.post('/login', [loginMiddleware.loginValidation], userService.loginUserService)

userApi.post('/logout',[roleValidationMiddleware.customerValidation], userService.logoutUserService)

userApi.put('/user/:id',[roleValidationMiddleware.customerValidation], userService.updateUserService)

userApi.delete('/user/:id',[roleValidationMiddleware.customerValidation], userService.removeUserService)

// userApi.get('/user', userService.getUserService) // get all the users

// userApi.delete('/user', userService.deleteUserService) // Delete all users

module.exports = userApi