const jwt = require("jsonwebtoken");
const userDao = require('../dao/userDao');

const SECRET_KEY = "9d48318c446f31b657864aa5a2873da3c2fa5b51af4964a8ad6c280153316851";

const isAuthenticated = (req, res, next) => {
  const token = req.cookies['authToken'];
  console.log("Received token:", req);
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, SECRET_KEY, async (err, decoded) => {
    if (err) {
        console.log("ERROR",err);
      return res.status(403).json({ message: "Invalid token" });
    }
    try {
      const user = await userDao.findEmail(decoded.email);
      console.log("user",user);
      
      if (!user) return res.status(401).json({ message: 'Unauthorized' });
      req.user = user; // Attach user to request
      next();
    } catch (error) {
      console.error("Error fetching user data:", error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
};

const adminValidation = (req, res, next) => {
  if (req.cookies.user_role !== "admin") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};

const customerValidation = (req, res, next) => {
  if (req.cookies.user_role !== "customer") {
    return res.status(403).json({ message: "Invalid user" });
  }
  next();
};

module.exports = {
  isAuthenticated,
  adminValidation,
  customerValidation
};
