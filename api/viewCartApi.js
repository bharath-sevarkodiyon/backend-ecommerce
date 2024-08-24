const express = require('express')
const viewCartService = require('../service/cartService')
const roleValidationMiddleware = require('../middleware/roleValidationMiddleware');

const viewCartApi = express.Router()

viewCartApi.post('/viewcart',[roleValidationMiddleware.customerValidation], viewCartService.createCartService)

viewCartApi.get('/viewcart',[roleValidationMiddleware.customerValidation], viewCartService.getCartService)

viewCartApi.put('/viewcart/:id',[roleValidationMiddleware.customerValidation], viewCartService.updateCartService)

viewCartApi.delete('/viewcart',[roleValidationMiddleware.customerValidation], viewCartService.deleteCartService)

module.exports = viewCartApi