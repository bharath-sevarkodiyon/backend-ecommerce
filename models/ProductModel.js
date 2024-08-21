const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // price
    item_price: {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
        min: 0
    },
    discount: {
        type: Number,
        min: 0,
        default: 0
    },
    discounted_price: {
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
    productCategory: {
        type: String,
        required: true,
    },
    // SKU: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    brandName: {
        type: String,
    },
    availableStockQuantity: {   
        type: Number,
        min: 0
    },
    color: {
        type: String,
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = {
    Product
};
