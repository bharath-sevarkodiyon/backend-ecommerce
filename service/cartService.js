const cartDao = require('../dao/cartDao')

const createCartService = async (req, res)=>{
    try{
        const {...cartData} = req.body
        const data = await cartDao.createCart({...cartData})
        return res.status(201).json(data)
    } catch(error){
        // console.log("Service",error);
        
        return res.status(500).json({ message: "Internal server errorrrr" })
    }
}

const getAllCartService = async (req, res)=>{
    try{
        const data = await cartDao.getAllCart()
        return res.status(200).json(data)
    } catch(error){
        return res.status(500).json({ message: "Internal server error" })
    }
}
const getCartService = async (req, res)=>{
    const cartId = req.params.id;
    try{
        const data = await cartDao.getCart(cartId)
        return res.status(200).json(data)
    } catch(error){
        return res.status(500).json({ message: "Internal server error" })
    }
}

const updateCartService = async (req, res) => {
    const cartId = req.params.id;
    const updateData = req.body;
    try {
        const data = await cartDao.updateCart(cartId, updateData);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

const deleteCartService = async (req, res) => {
    const cartId = req.params.id;
    try {
        const data = await cartDao.deleteCart(cartId);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    createCartService,
    getAllCartService,
    getCartService,
    updateCartService,
    deleteCartService
}