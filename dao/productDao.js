const productModel = require('../models/ProductModel')

const createProduct = async (data)=>{
    const newProduct = new productModel.Product(data)
    const newData = await newProduct.save();
    // returning an object
    return newData
}

const getproduct = async () => {
    const product = await productModel.Product.find();
    // returning an array of objects
    return product
};

const updateProduct = async (productId, updateData) => {
    // if 3rd argument is not present it return la old data, if it is true it returns the updated data
    const product = await productModel.Product.findByIdAndUpdate(productId, updateData, { new: true });
    console.log("DAO", product);
    // returning an object
    return product
};

const removeProduct = async (productId) => {
    // if 3rd argument is not present it return la old data, if it is true it returns the updated data
    const product = await productModel.Product.findByIdAndDelete(productId);
    console.log("DAO", product);
    // returning an object
    return product
};

module.exports ={
    createProduct,
    getproduct,
    updateProduct,
    removeProduct
}