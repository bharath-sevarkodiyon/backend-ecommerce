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

module.exports = {
    createOrderService,
    getOrderService
}