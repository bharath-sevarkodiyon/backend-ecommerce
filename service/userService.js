const userDao = require('../dao/userDao')
const jwt = require('jsonwebtoken');
const md5 = require('md5')

const createUserService = async (req, res)=>{
    try{
        const { password, ...otherDetails } = req.body;
        const hashedPassword = md5(password)
        const userData = {
            ...otherDetails,
            password: hashedPassword,
        };
        const data = await userDao.createUser(userData)
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
    const { password, ...otherDetails } = req.body;
        const hashedPassword = md5(password)
        const updateData = {
            ...otherDetails,
            password: hashedPassword,
        };
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


const loginUserService = async (req, res) => {
    try {
        const email = req.body.email.toLowerCase();
        const password = req.body.password;
        const hashedPassword = md5(password)
        
        const user = await userDao.findUser(email, hashedPassword);

        const SECRET_KEY = '9d48318c446f31b657864aa5a2873da3c2fa5b51af4964a8ad6c280153316851';
        const validateToken = req.session.token
        console.log(!validateToken);
        
        if (user && user.password === hashedPassword && !validateToken) {

            const token = jwt.sign(
                { email: user.email }, 
                SECRET_KEY, 
                { expiresIn: '1h' });

            req.session.token = token;

            return res.status(200).json({ message: 'User Login successfully', token});
        } else {
            return res.status(400).json({ message: 'User Login failed' });
        }
    } catch (error) {
        console.log("user Service",error);
        return res.status(400).json({ message: 'Invalid user email or password' });
    }
};

const logoutUserService = (req, res) => {
    if(!req.session){
        req.session.destroy(err => {
            if (err) {
                return res.status(500).json({ message: 'User Failed to log out' });
            }
            res.clearCookie('connect.sid');
            return res.status(200).json({ message: 'User Logged out successfully' });
        });
    } else {
        return res.status(500).json({ message: 'User Failed to log out' });
    }
};

module.exports = {
    createUserService,
    getUserService,
    updateUserService,
    removeUserService,
    deleteUserService,
    loginUserService,
    logoutUserService
}