const userLoginValidation = (req, res, next) => {
    const fields = [
      "email",
      "password"
    ];
    for (let field of fields) {
      const value = req.body[field];

      // field present and empty
      if (value === undefined && typeof value === "string") {
        if(value.trim() === ""){
          return res.status(400).json({ message: `Invalid field` });
        }
      } 
    }

    next();
  };
  
  module.exports = { userLoginValidation };
  