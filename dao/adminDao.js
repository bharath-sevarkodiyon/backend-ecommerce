const adminModel = require('../models/UserDetailsModel');

const findAdmin = async (email, password) => {
    const user = await adminModel.UserDetails.findOne({ email, password });
    return user;
};

module.exports = {
    findAdmin
};
