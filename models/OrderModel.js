const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    // add user reference
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserDetails',
        required: true
    },
    // cart_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Cart',
    // },
    status: {
        type: String,
        required: true,
        enum: ['Processing', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Processing'
    },
    paymentMethod: {
        type: String,
        required: true
    },
    productDetails: [{
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        orderedQuantity: {
            type: Number,
            required: true,
            min: 1
        },
        sellingPrice: {
            type: Number,
            required: true,
            min: 0
        },
    }]}, {
        timestamps: true // This adds createdAt and updatedAt fields
});

const order = mongoose.model('Orders', orderSchema);

module.exports = {
    order
};
