const userSignupValidation = (req, res, next) => {
  const fields = [
    "firstName",
    "lastName",
    "email",
    "password",
    "phone"
  ];
  for (let field of fields) {
    const value = req.body[field];

    // To check the field
    if (value === undefined) {
      // return res.status(400).json({ message: `Field ${field} is required.` });
      return res.status(400).json({ message: `Invalid field` });
    }

    // field present and empty
    if (typeof value === "string") {
      if(value.trim() === ""){
        // return res.status(400).json({ message: `Field ${field} cannot be empty or just spaces.` });
        return res.status(400).json({ message: `Invalid field` });
      }
    } 
    else {
      if (typeof value === "number") {
        if(isNaN(value)){
          // return res.status(400).json({ message: `Field ${field} must be a valid number.` });
          return res.status(400).json({ message: `Invalid field` });
        }
      } else {
        // return res.status(400).json({ message: `Field ${field} has an invalid type.` });
        return res.status(400).json({ message: `Invalid field` });
      }
    }
  }

  next();
};

module.exports = { userSignupValidation };