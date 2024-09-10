const loginValidation = (req, res, next) => {
    const fields = [
      "email",
      "password"
    ];
    for (let field of fields) {
      const value = req.body[field];

      // field present and empty
      if (value === undefined && typeof value === "string") {
        if(value.trim() === ""){
          return res.status(400).json({ message: `Empty field` });
        }
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
    }

    next();
  };
  
  module.exports = { loginValidation };
  