const express = require('express')
const orderService = require('../service/orderService')
const roleValidationMiddleware = require('../middleware/roleValidationMiddleware');

const orderApi = express.Router()

orderApi.post('/order',[roleValidationMiddleware.customerValidation], orderService.createOrderService)

orderApi.get('/order',[roleValidationMiddleware.customerValidation], orderService.getOrderService)

module.exports = orderApi