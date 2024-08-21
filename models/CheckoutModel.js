const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const checkoutSchema = new Schema({
    // user_id
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserDetails',
        required: true
    },
    cart_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart',
        required: true
    },
    // Make sure user enter the address
    shippingAddress: {
        type: String,
        required: true
    },
    billingAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true,
        maxlength: 6
    }
}, { 
    timestamps: true 
});

const Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports = {
    Checkout
};
