const express = require('express')
const viewCartService = require('../service/cartService')
const roleValidationMiddleware = require('../middleware/roleValidationMiddleware');

const viewCartApi = express.Router()

viewCartApi.post('/viewcart', 
    // [roleValidationMiddleware.isAuthenticated, 
    // roleValidationMiddleware.customerValidation], 
    viewCartService.createCartService)

viewCartApi.get('/viewcart', 
    // [roleValidationMiddleware.isAuthenticated, 
    // roleValidationMiddleware.customerValidation], 
    viewCartService.getAllCartService)

viewCartApi.put('/viewcart/:id', 
    // [roleValidationMiddleware.isAuthenticated, 
    // roleValidationMiddleware.customerValidation], 
    viewCartService.updateCartService)

viewCartApi.delete('/viewcart/:id', 
    // [roleValidationMiddleware.isAuthenticated, 
    // roleValidationMiddleware.customerValidation], 
    viewCartService.deleteCartService)

// viewCartApi.get('/viewcart/:id', viewCartService.getCartService)

module.exports = viewCartApi