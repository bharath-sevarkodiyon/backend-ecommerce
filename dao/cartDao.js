const cartModel = require('../models/CartModel')

const createCart = async (data)=>{
    const newProduct = new cartModel.cart(data)
    const newData = await newProduct.save();
    // console.log("newData",newData);
    return newData
}

const getAllCart = async () => {
    const user = await cartModel.cart.find({});
    return user
};

const getCart = async (cartId) => {
    const user = await cartModel.cart.findById({ _id: cartId});
    return user
};

const updateCart = async (cartId, updateData) => {
    const user = await cartModel.cart.findByIdAndUpdate(cartId, updateData, { new: true });
    return user
};

const deleteCart = async (cartId) => {
    const user = await cartModel.cart.deleteOne({ _id: cartId });
    return user;
};

module.exports ={
    createCart,
    getAllCart,
    getCart,
    updateCart,
    deleteCart
}