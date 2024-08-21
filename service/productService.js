const productDao = require('../dao/productDao')

const createProductService = async (req, res)=>{
    try{
        const { ...userInput } = req.body
        const data = await productDao.createProduct({ ...userInput })
        return res.status(201).json({ ...data })
    } catch(error){
        console.log(error);
        return res.status(500).json({ "message": "Internal server error" })
    }
}

module.exports = {
    createProductService
    
}