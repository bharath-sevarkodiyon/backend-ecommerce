const express = require('express')
const productService = require('../service/productService')
const productApi = express.Router();

productApi.post('/product', productService.createProductService)


module.exports = productApi