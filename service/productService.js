const productDao = require('../dao/productDao')

const createProductService = async (req, res)=>{
    try{
        const productData = req.body
        const data = await productDao.createProduct(productData)
        return res.status(201).json(data)
    } catch(error){
        console.log("product service",error);
        
        return res.status(500).json({ "message": "Internal server error" })
    }
}

const getProductService = async (req, res)=>{
    try{
        const data = await productDao.getproduct()
        return res.status(200).json(data)
    } catch(error){
        return res.status(500).json({ "message": "Internal server error" })
    }
}

const updateProductService = async (req, res) => {
    const productId = req.params.id;
    const updateData = req.body;
    try {
        const data = await productDao.updateProduct(productId, updateData);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ "message": "Internal server error" });
    }
};

const removeProductService = async (req, res) => {
    const productId = req.params.id;
    try {
        const data = await productDao.removeProduct(productId);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ "message": "Internal server error" });
    }
};

const deleteProductService = async (req, res) => {
    try {
        const data = await productDao.deleteProducts();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ "message": "Internal server error" });
    }
};

module.exports = {
    createProductService,
    getProductService,
    updateProductService,
    removeProductService,
    deleteProductService
}