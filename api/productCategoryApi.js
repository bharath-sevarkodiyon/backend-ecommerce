const express = require('express')
const productCategoryService = require('../service/productCategoryService');
const roleValidationMiddleware = require('../middleware/roleValidationMiddleware');
const productCategoryApi = express.Router();

productCategoryApi.post('/productCategory',[roleValidationMiddleware.adminValidation], productCategoryService.createProductCategoryService)

productCategoryApi.get('/productCategory',[roleValidationMiddleware.adminValidation], productCategoryService.getProductCategoryService)

productCategoryApi.put('/productCategory/:id',[roleValidationMiddleware.adminValidation], productCategoryService.updateProductCategoryService)

productCategoryApi.delete('/productCategory/:id',[roleValidationMiddleware.adminValidation], productCategoryService.removeProductCategoryService)

productCategoryApi.delete('/productCategory',[roleValidationMiddleware.adminValidation], productCategoryService.deleteProductCategoryService)


module.exports = productCategoryApi