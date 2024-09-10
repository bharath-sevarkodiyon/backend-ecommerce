const orderDao = require('../dao/orderDao')

const createOrderService = async (req, res)=>{
    try{
        const orderData = req.body
        const data = await orderDao.createOrder(orderData)
        return res.status(201).json(data)
    } catch(error){
        return res.status(500).json({ "message": "Internal server error" })
    }
}

const getOrderService = async (req, res)=>{
    try{
        const data = await orderDao.getOrder()
        return res.status(200).json(data)
    } catch(error){
        return res.status(500).json({ "message": "Internal server error" })
    }
}

const updateOrderService = async (req, res)=>{
    const orderId = req.params.id;
    const updateData = req.body;
    try{
        const data = await orderDao.updateOrder(orderId, updateData)
        return res.status(200).json(data)
    } catch(error){
        return res.status(500).json({ "message": "Internal server error" })
    }
}

const getOrderByIdService = async (req, res)=>{
    const orderId = req.params.id;
    try{
        const data = await orderDao.getOrderById(orderId)
        return res.status(200).json(data)
    } catch(error){
        return res.status(500).json({ "message": "Internal server error" })
    }
}

module.exports = {
    createOrderService,
    getOrderService,
    updateOrderService,
    getOrderByIdService
}