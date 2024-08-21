const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    checkout_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Checkout',
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Processing', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Processing'
    }
});

const Orders = mongoose.model('Orders', orderSchema);

module.exports = {
    Orders
};
