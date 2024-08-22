const userDao = require('../dao/userDao')

const createUserService = async (req, res)=>{
    try{
        const { ...receivedData } = req.body;
        const data = await userDao.createUserDao({...receivedData})
        return res.status(201).json({ ...data })
    }catch(error){
        // if (error.code === 11000) {
        //     res.status(400).json({
        //         error: 'Email already exists. Please use a different email.'
        //     });
        // }
        console.log(error);
        return res.status(500).json({ message: "Internal server error" })
    }
}
module.exports = {
    createUserService
}