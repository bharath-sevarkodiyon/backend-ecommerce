const createCheckout = require('../models/CheckoutModel');

const createCheckoutDao = async (data)=>{
    const newCheckout = new createCheckout.Checkout({
        ...data
    })
    const newData = await newCheckout.save();;
    return {...newData._doc}
}

module.exports = {
    createCheckoutDao,
};
