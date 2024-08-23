const express = require('express')
const userService = require('../service/userService')
const userSignupMiddleware = require('../middleware/userSignupValidation')
const userLoginMiddleware = require('../middleware/userLoginValidation')

const userApi = express.Router()

userApi.post('/signup',[userSignupMiddleware.userSignupValidation], userService.createUserService)

userApi.post('/login', [userLoginMiddleware.userLoginValidation], userService.loginUserService)

userApi.post('/logout', userService.logoutUserService)

userApi.get('/user', userService.getUserService)

userApi.put('/user/:id', userService.updateUserService)

userApi.delete('/user/:id', userService.removeUserService)

userApi.delete('/user', userService.deleteUserService)

module.exports = userApi