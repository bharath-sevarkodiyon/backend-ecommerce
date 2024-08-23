const express = require('express')
const userService = require('../service/userService')
const userMiddleware = require('../middleware/userValidator')

const userApi = express.Router()

userApi.post('/signup',[userMiddleware.userValidator], userService.createUserService)

userApi.get('/user', userService.getUserService)

userApi.put('/user/:id', userService.updateUserService)

userApi.delete('/user/:id', userService.removeUserService)

userApi.delete('/user', userService.deleteUserService)

module.exports = userApi