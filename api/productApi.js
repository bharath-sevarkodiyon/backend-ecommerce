const express = require('express')
const productService = require('../service/productService')
const roleValidationMiddleware = require('../middleware/roleValidationMiddleware');
const commonValidationMiddleware = require('../middleware/commonValidationMiddleware')

const productApi = express.Router();

productApi.post('/product',[roleValidationMiddleware.adminValidation], productService.createProductService)

productApi.get('/product',[commonValidationMiddleware.roleValidation], productService.getProductService)

productApi.put('/product/:id',[roleValidationMiddleware.adminValidation], productService.updateProductService)

productApi.delete('/product/:id',[roleValidationMiddleware.adminValidation], productService.removeProductService)

productApi.delete('/product',[roleValidationMiddleware.adminValidation], productService.deleteProductService)


module.exports = productApi