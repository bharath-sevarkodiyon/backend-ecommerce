const express = require('express')
const orderService = require('../service/orderService')
const orderApi = express.Router()

orderApi.post('/order', orderService.createOrderService)

orderApi.get('/order', orderService.getOrderService)

module.exports = orderApi