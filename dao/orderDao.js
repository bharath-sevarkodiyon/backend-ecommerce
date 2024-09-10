const orderModel = require('../models/OrderModel')

const createOrder = async (data)=>{
    const newProduct = new orderModel.order(data)
    const newData = await newProduct.save();
    return newData
}

const getOrder = async () => {
    const orders = await orderModel.order.find();
    return orders
};

const updateOrder = async (orderId, updateData) => {
    const orders = await orderModel.order.findByIdAndUpdate(orderId, updateData, { new: true });
    return orders
};

const getOrderById = async (orderId) => {
    const orders = await orderModel.order.findById({ _id: orderId});
    return orders
};

module.exports = {
    createOrder,
    getOrder,
    updateOrder,
    getOrderById
}