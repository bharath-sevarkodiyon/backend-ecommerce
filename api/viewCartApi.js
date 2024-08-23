const express = require('express')
const viewCartService = require('../service/cartService')
const viewCartApi = express.Router()

viewCartApi.post('/viewcart', viewCartService.createCartService)

viewCartApi.get('/viewcart', viewCartService.getCartService)

viewCartApi.put('/viewcart/:id', viewCartService.updateCartService)

viewCartApi.delete('/viewcart', viewCartService.deleteCartService)

module.exports = viewCartApi