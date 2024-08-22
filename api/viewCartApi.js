const express = require('express')
const viewCartService = require('../service/cartService')
const viewCartApi = express.Router()

viewCartApi.post('/viewcart', viewCartService.createCartService)

module.exports = viewCartApi