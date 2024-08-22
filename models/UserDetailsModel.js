const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDetailSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer'
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 15
    },
    // To have customer ordered products(Order History)
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    },
    // Not forcing the customer to enter the address details
    shippingAddress: {
        type: String,
    },
    billingAddress: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    pincode: {
        type: Number,
        maxlength: 6
    },
});

const UserDetails = mongoose.model("UserDetails", userDetailSchema);

module.exports = {
    UserDetails
};