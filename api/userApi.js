const express = require('express')
const userService = require('../service/userService')
const userMiddleware = require('../middleware/userValidator')

const userApi = express.Router()


userApi.post('/user',[userMiddleware.userValidator], userService.createUserService)

module.exports = userApi