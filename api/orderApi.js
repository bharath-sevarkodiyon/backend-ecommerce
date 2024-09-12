const express = require("express");
const orderService = require("../service/orderService");
const roleValidationMiddleware = require("../middleware/roleValidationMiddleware");

const orderApi = express.Router();

orderApi.post(
  "/orders",
  [
    roleValidationMiddleware.isAuthenticated,
    roleValidationMiddleware.customerValidation,
  ],
  orderService.createOrderService
);

orderApi.get(
  "/orders",
  [roleValidationMiddleware.isAuthenticated],
  orderService.getOrderService
);
orderApi.put(
  "/orders/:id",
  [
    roleValidationMiddleware.isAuthenticated,
    roleValidationMiddleware.adminValidation,
  ],
  orderService.updateOrderService
);

orderApi.get(
  "/orders/:id",
  [
    roleValidationMiddleware.isAuthenticated
  ],
  orderService.getOrderByIdService
);

module.exports = orderApi;
