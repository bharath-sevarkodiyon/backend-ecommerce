const productCategoryDao = require('../dao/productCategoryDao')

const createProductCategoryService = async (req, res)=>{
    try{
        const categoryData = req.body
        const data = await productCategoryDao.createCategory(categoryData)
        return res.status(201).json(data)
    } catch(error){
        return res.status(500).json({ "message": "Internal server error" })
    }
}

const getProductCategoryService = async (req, res)=>{
    try{
        const data = await productCategoryDao.getCategory()
        return res.status(200).json(data)
    } catch(error){
        return res.status(500).json({ "message": "Internal server error" })
    }

}
const getProductCategoryIdService = async (req, res)=>{
    const categoryId = req.params.id;
    try{
        const data = await productCategoryDao.getCategoryById(categoryId)
        return res.status(200).json(data)
    } catch(error){
        return res.status(500).json({ "message": "Internal server error" })
    }
}

const updateProductCategoryService = async (req, res) => {
    const categoryId = req.params.id;
    const updateData = req.body;
    try {
        const data = await productCategoryDao.updateCategory(categoryId, updateData);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ "message": "Internal server error" });
    }
};

const removeProductCategoryService = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const data = await productCategoryDao.removeCategory(categoryId);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ "message": "Internal server error" });
    }
};

const deleteProductCategoryService = async (req, res) => {
    try {
        const data = await productCategoryDao.deleteCategory();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ "message": "Internal server error" });
    }
};

module.exports = {
    createProductCategoryService,
    getProductCategoryService,
    getProductCategoryIdService,
    updateProductCategoryService,
    removeProductCategoryService,
    deleteProductCategoryService
}