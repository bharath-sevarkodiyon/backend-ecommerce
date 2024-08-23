const cartDao = require('../dao/cartDao')

const createCartService = async (req, res)=>{
    try{
        const userInput = req.body
        const data = await cartDao.createCart(userInput)
        return res.status(201).json(data)
    } catch(error){
        return res.status(500).json({ "message": "Internal server error" })
    }
}

const getCartService = async (req, res)=>{
    try{
        const data = await cartDao.getCart()
        return res.status(200).json(data)
    } catch(error){
        return res.status(500).json({ "message": "Internal server error" })
    }
}

const updateCartService = async (req, res) => {
    const productId = req.params.id;
    const updateData = req.body;
    try {
        const data = await cartDao.updateCart(productId, updateData);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ "message": "Internal server error" });
    }
};

const deleteCartService = async (req, res) => {
    try {
        const data = await cartDao.deleteCart();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ "message": "Internal server error" });
    }
};

module.exports = {
    createCartService,
    getCartService,
    updateCartService,
    deleteCartService
}