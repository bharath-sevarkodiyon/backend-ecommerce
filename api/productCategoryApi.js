const express = require('express')
const productCategoryService = require('../service/productCategoryService');
const roleValidationMiddleware = require('../middleware/roleValidationMiddleware');
const productCategoryApi = express.Router();

productCategoryApi.post('/productCategory', 
    // [roleValidationMiddleware.isAuthenticated, 
    // roleValidationMiddleware.adminValidation], 
    productCategoryService.createProductCategoryService)

productCategoryApi.get('/productCategory', productCategoryService.getProductCategoryService)

productCategoryApi.get('/productCategory/:id', productCategoryService.getProductCategoryIdService)

productCategoryApi.put('/productCategory/:id', 
    // [roleValidationMiddleware.isAuthenticated, 
    // roleValidationMiddleware.adminValidation], 
    productCategoryService.updateProductCategoryService)

productCategoryApi.delete('/productCategory/:id', 
    // [roleValidationMiddleware.isAuthenticated, 
    // roleValidationMiddleware.adminValidation], 
    productCategoryService.removeProductCategoryService)

// productCategoryApi.delete('/productCategory', [roleValidationMiddleware.isAuthenticated, roleValidationMiddleware.adminValidation], productCategoryService.deleteProductCategoryService)


module.exports = productCategoryApi