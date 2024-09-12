const userDao = require('../dao/userDao')

const userSignupValidation = async (req, res, next) => {
  
  const { email } = req.body;
  const user = await userDao.findEmail(email);
  if(user){
    return res.status(400).json({ message: `Email or Phone exist` });
  }

  const fields = ["firstName", "lastName", "email", "password", "phone"];
  for (let field of fields) {
    const value = req.body[field];

    // if (value === undefined) {
    //   return res.status(400).json({ message: `Invalid field / not present` });
    // }

    if (typeof value === "string" && value.trim() === "") {
      return res.status(400).json({ message: `Empty field` });
    }

    if (field === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        return res.status(400).json({ message: "Invalid email field" });
      }
    } 

    if (field === "password") {
      if (value.length < 8) {
        return res.status(400).json({ message: "Invalid password field" });
      }
    }

    if (field === "phone") {
      // const phonePattern = /^\d{10,15}$/;
      if (value.length < 10 || value.length > 15) {
        return res.status(400).json({ message: "Invalid Phone field" });
      }
    }
  }

//   const { pincode } = req.body;
// const numericPincode = Number(pincode);

// // Ensure pincode is a valid number
// if (!isNaN(numericPincode)) {
//   const pincodePattern = /^\d{6,}$/; // Pattern for pincode validation
//   if (!pincodePattern.test(numericPincode.toString())) {
//     return res.status(400).json({ message: "Invalid pincode format. Pincode must be at least 6 digits." });
//   }
// } else {
//   return res.status(400).json({ message: "Pincode must be a numeric value." });
// }


  next();
};


module.exports = { userSignupValidation };