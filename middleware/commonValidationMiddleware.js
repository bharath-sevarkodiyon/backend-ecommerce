const roleValidation = (req, res, next) => {
    console.log("ROLE VALIDATION",req.session.role)
    if (req.session.role === 'admin' || req.session.role === 'customer') {
        return next();  // Allow access if the role is admin or customer
    } else {
        return res.status(403).json({ message: 'Access denied' });
    }
};

module.exports = {
    roleValidation
}