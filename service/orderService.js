const orderDao = require('../dao/orderDao')

const createOrderService = async (req, res)=>{
    try{
        const { ...receivedData } = req.body;
        const data = await orderDao.createOrderDao({...receivedData})
        return res.status(201).json({ ...data })
    }catch(error){
        console.log(error);
        return res.status(500).json({ message: "Internal server error" })
    }
}
module.exports = {
    createOrderService
}