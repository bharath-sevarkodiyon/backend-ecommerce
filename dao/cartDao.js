const cartModel = require('../models/CartModel')

const createCart = async (data)=>{
    const newProduct = new cartModel.cart(data)
    const newData = await newProduct.save();
    return newData
}

const getCart = async () => {
    const user = await cartModel.cart.find();
    return user
};

const updateCart = async (userId, updateData) => {
    const user = await cartModel.cart.findByIdAndUpdate(userId, updateData, { new: true });
    return user
};

const deleteCart = async () => {
    const user = await cartModel.cart.deleteMany({});
    return user;
};

module.exports ={
    createCart,
    getCart,
    updateCart,
    deleteCart
}