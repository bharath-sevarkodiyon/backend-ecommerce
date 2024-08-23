const CategoryModel = require('../models/CategoryModel')

const createCategory = async (data)=>{
    const newProduct = new CategoryModel.productCategory(data)
    const newData = await newProduct.save();
    return newData
}

const getCategory = async () => {
    const category = await CategoryModel.productCategory.find();
    return category
};

const updateCategory = async (categoryId, updateData) => {
    const category = await CategoryModel.productCategory.findByIdAndUpdate(categoryId, updateData, { new: true });
    return category
};

const removeCategory = async (categoryId) => {
    const category = await CategoryModel.productCategory.findByIdAndDelete(categoryId);
    return category
};

const deleteCategory = async () => {
    const category = await CategoryModel.productCategory.deleteMany({});
    return category;
};

module.exports ={
    createCategory,
    getCategory,
    updateCategory,
    removeCategory,
    deleteCategory
}