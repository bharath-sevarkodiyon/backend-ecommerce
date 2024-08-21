const createCartDetails = require('../models/CartModel')

const createCartDao = async (data)=>{
    const newCart = new createCartDetails.Cart({
        ...data
    })
    const newData = await newCart.save();
    return {...newData._doc}
}

module.exports = {
    createCartDao
}