const createUserDetails = require('../models/UserDetailsModel')

const createUserDao = async (data)=>{
    const newUser = new createUserDetails.UserDetails({
        ...data
    })
    const newData = await newUser.save();
    return {...newData._doc}
}

const getUsersDao = async () => {
    const getUser = new createUserDetails.UserDetails({
        ...data
    })
    const users = await getUser.find({});
    return {...users._doc}
};

module.exports = {
    createUserDao, 
    getUsersDao
}