const express = require('express')
const orderService = require('../service/orderService')
const orderApi = express.Router()

orderApi.post('/orders', orderService.createOrderService)

module.exports = orderApi