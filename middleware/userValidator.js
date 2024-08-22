const userService = require('../service/userService')

const userValidator = (req, res, next) => {
  const fields = [
    "fullName",
    "email",
    "password",
    "role",
    "phone",
    "shippingAddress",
    "billingAddress",
    "city",
    "state",
    "pincode",
  ];
  for (let field of fields) {
    const value = req.body[field];
    // To check the field
    if (value === undefined) {
      return res.status(400).json({ message: `Field ${field} is required.` });
    }
    // field present and empty
    if (typeof value === "string") {
      if(value.trim() === ""){
        return res.status(400).json({ message: `Field ${field} cannot be empty or just spaces.` });
      }
    } 
    else {
      if (typeof value === "number") {
        if(isNaN(value)){
          return res.status(400).json({ message: `Field ${field} must be a valid number.` });
        }
      } else {
        return res.status(400).json({ message: `Field ${field} has an invalid type.` });
      }
    }
  }

  next();
};

module.exports = { userValidator };
