const express = require('express')
const productService = require('../service/productService')
const roleValidationMiddleware = require('../middleware/roleValidationMiddleware');

const productApi = express.Router();

productApi.post('/product', 
    [roleValidationMiddleware.isAuthenticated, 
    roleValidationMiddleware.adminValidation], 
    productService.createProductService)

productApi.get('/product', productService.getProductService)

productApi.put('/product/:id', 
    [roleValidationMiddleware.isAuthenticated, 
    roleValidationMiddleware.adminValidation], 
    productService.updateProductService)

productApi.delete('/product/:id', 
    [roleValidationMiddleware.isAuthenticated, 
    roleValidationMiddleware.adminValidation], 
    productService.removeProductService)

// productApi.delete('/product', [roleValidationMiddleware.isAuthenticated, roleValidationMiddleware.adminValidation], productService.deleteProductService)


module.exports = productApi