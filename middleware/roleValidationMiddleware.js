const adminValidation = (req, res, next) => {
    
    if (req.session.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied' });
    }

    next();
};

const customerValidation = (req, res, next) => {
    
    if (req.session.role !== 'customer') {
        return res.status(403).json({ message: 'Invalid user' });
    }

    next();
};

module.exports = {
    adminValidation,
    customerValidation
}