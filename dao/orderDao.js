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

module.exports = {
    createOrder,
    getOrder,
}