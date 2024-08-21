const cartDao = require('../dao/cartDao')

const createCartService = async (req, res)=>{
    try{
        const { ...receivedData } = req.body;
        const data = await cartDao.createCartDao({...receivedData})
        return res.status(201).json({ ...data })
    }catch(error){
        console.log(error);
        return res.status(500).json({ message: "Internal server error" })
    }
}
module.exports = {
    createCartService
}