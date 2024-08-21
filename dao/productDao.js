const productModel = require('../models/ProductModel')

const createProduct = async (data)=>{
    const newProduct = new productModel.Product({
        ...data
    })
    const newData = await newProduct.save();
    return {...newData._doc}
}

module.exports ={
    createProduct,
}