const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    // add user reference
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
    status: {
        type: String,
        required: true,
        enum: ['Processing', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Processing'
    }
});

const order = mongoose.model('Orders', orderSchema);

module.exports = {
    order
};
