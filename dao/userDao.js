const userModel = require('../models/UserDetailsModel')

const createUser = async (data)=>{
    const newProduct = new userModel.UserDetails(data)
    const newData = await newProduct.save();
    console.log(newData);
    
    return newData
}

const getUser = async () => {
    const user = await userModel.UserDetails.find();
    return user
};

const getSingleUser = async (userId) => {
    const user = await userModel.UserDetails.findOne({ _id: userId});
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
const findEmail = async (email) => {
    const user = await userModel.UserDetails.findOne({ email });
    console.log(user);
    return user;
};

module.exports ={
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    removeUser,
    deleteUsers,
    findUser,
    findEmail
}