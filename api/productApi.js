const express = require('express')
const productService = require('../service/productService')
const productApi = express.Router();

productApi.post('/product', productService.createProductService)

productApi.get('/product', productService.getProductService)

productApi.put('/product/:id', productService.updateProductService)

productApi.delete('/product/:id', productService.removeProductService)

productApi.delete('/product', productService.deleteProductService)


module.exports = productApi