const createOrder = require('../models/OrderModel')

const createOrderDao = async (data)=>{
    const newOrder = new createOrder.Orders({
        ...data
    })
    const newData = await newOrder.save();
    return {...newData._doc}
}

module.exports = {
    createOrderDao
}