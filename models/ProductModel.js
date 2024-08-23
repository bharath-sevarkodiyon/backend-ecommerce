const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        // required: true,
    },
    // price
    itemPrice: {
        type: mongoose.Schema.Types.Decimal128,
        // required: true,
        min: 0
    },
    discount: {
        type: Number,
        min: 0,
        default: 0
    },
    sellingPrice: {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
        min: 0
    },
    // images
    mainImage: {
        type: String,
        required: true
    },
    additionalImages: [{
        type: String,
    }],
    // productCategory reference
    product_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductCategory',
        required: true,
    },
    stockQuantity: {   
        type: Number,
        required: true,
        min: 0
    },
    brandName: {
        type: String,
    },
    color: {
        type: String,
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = {
    Product
};
