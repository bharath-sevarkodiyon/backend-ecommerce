const express = require('express')
const productService = require('../service/productService')
const productApi = express.Router();

productApi.post('/product', productService.createProductService)

productApi.get('/product', productService.getProductService)

productApi.patch('/product/:id', productService.updateProductService)

productApi.patch('/product/:id', productService.removeProductService)


module.exports = productApi