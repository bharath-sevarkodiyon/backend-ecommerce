const userDao = require('../dao/userDao')

const createUserService = async (req, res)=>{
    try{
        const userInput = req.body
        const data = await userDao.createUser(userInput)
        return res.status(201).json(data)
    } catch(error){
        return res.status(500).json({ "message": "Internal server error" })
    }
}

const getUserService = async (req, res)=>{
    try{
        const data = await userDao.getUser()
        return res.status(200).json(data)
    } catch(error){
        return res.status(500).json({ "message": "Internal server error" })
    }
}

const updateUserService = async (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;
    try {
        const data = await userDao.updateUser(userId, updateData);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ "message": "Internal server error" });
    }
};

const removeUserService = async (req, res) => {
    const userId = req.params.id;
    try {
        const data = await userDao.removeUser(userId);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ "message": "Internal server error" });
    }
};

const deleteUserService = async (req, res) => {
    try {
        const data = await userDao.deleteUsers();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ "message": "Internal server error" });
    }
};

module.exports = {
    createUserService,
    getUserService,
    updateUserService,
    removeUserService,
    deleteUserService
}