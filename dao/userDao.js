const userModel = require('../models/UserDetailsModel')

const createUser = async (data)=>{
    const newProduct = new userModel.UserDetails(data)
    const newData = await newProduct.save();
    return newData
}

const getUser = async () => {
    const user = await userModel.UserDetails.find();
    return user
};

const updateUser = async (userId, updateData) => {
    const user = await userModel.UserDetails.findByIdAndUpdate(userId, updateData, { new: true });
    return user
};

const removeUser = async (userId) => {
    const user = await userModel.UserDetails.findByIdAndDelete(userId);
    return user
};

const deleteUsers = async () => {
    const user = await userModel.UserDetails.deleteMany({});
    return user;
};

const findUser = async (email, password) => {
    const user = await userModel.UserDetails.findOne({ email, password });
    return user;
};

module.exports ={
    createUser,
    getUser,
    updateUser,
    removeUser,
    deleteUsers,
    findUser
}