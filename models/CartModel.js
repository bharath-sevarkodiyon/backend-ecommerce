const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    // user_id
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserDetails',
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
        itemPrice: {
            type: Number,
            required: true,
            min: 0
        },
    }],
    // overall Discount
    discount: {
        type: Number,
        min: 0,
        default: 0
    },
    deliveryCharges: {
        type: Number,
        min: 0,
        default: 0
    },
    totalPrice: {
        type: Number,
        required: true,
        min: 0
    }
});

const Cart = mongoose.model("viewcart", cartSchema);

module.exports = {
    Cart
};
