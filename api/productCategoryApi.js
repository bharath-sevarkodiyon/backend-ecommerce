const express = require('express')
const productCategoryService = require('../service/productCategoryService')
const productCategoryApi = express.Router();

productCategoryApi.post('/productCategory', productCategoryService.createProductCategoryService)

productCategoryApi.get('/productCategory', productCategoryService.getProductCategoryService)

productCategoryApi.put('/productCategory/:id', productCategoryService.updateProductCategoryService)

productCategoryApi.delete('/productCategory/:id', productCategoryService.removeProductCategoryService)

productCategoryApi.delete('/productCategory', productCategoryService.deleteProductCategoryService)


module.exports = productCategoryApi