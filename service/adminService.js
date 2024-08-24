const adminDao = require('../dao/adminDao');
const jwt = require('jsonwebtoken');
const md5 = require('md5');

const loginAdminService = async (req, res) => {
    try {
        const email = req.body.email.toLowerCase();
        const password = req.body.password;
        const hashedPassword = md5(password)
        
        const user = await adminDao.findAdmin(email, hashedPassword);
        
        const SECRET_KEY = 'b5d5526605108e1e851e61cd5975b4cda12ce5e8ca302d61053b6c7a32829643';
    
        const validateToken = req.session.token;

        if (user && user.password === hashedPassword && user.role === "admin" && !validateToken) {

            const token = jwt.sign(
                { email: user.email }, 
                SECRET_KEY, 
                { expiresIn: '1h' });

            req.session.token = token;
            req.session.role = user.role;

            return res.status(200).json({ message: 'Admin Login successfully'});
        } else{
            return res.status(200).json({ message: 'Admin Login failed'});
        }
    } catch (error) {
        console.log("user Service",error);
        return res.status(400).json({ message: 'Invalid admin email or password' });
    }
};

const logoutAdminService = (req, res) => {
    if(req.session.token){
        req.session.destroy(err => {
            if (err) {
                return res.status(500).json({ message: 'Admin Failed to log out' });
            }
            res.clearCookie('connect.sid');
            return res.status(200).json({ message: 'Admin Logged out successfully' });
        });
    } else {
        return res.status(500).json({ message: 'Admin Failed to log out' });
    }
};

module.exports = {
    loginAdminService,
    logoutAdminService
};
