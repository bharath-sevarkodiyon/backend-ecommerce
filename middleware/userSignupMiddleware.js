const userSignupValidation = (req, res, next) => {
  const fields = ["firstName", "lastName", "email", "password", "phone"];
  
  for (let field of fields) {
    const value = req.body[field];

    if (value === undefined) {
      return res.status(400).json({ message: `Invalid field` });
    }

    if (typeof value === "string" && value.trim() === "") {
      return res.status(400).json({ message: `Invalid field` });
    }

    if (field === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        return res.status(400).json({ message: "Invalid field" });
      }
    } 

    if (field === "password") {
      if (value.length < 8) {
        return res.status(400).json({ message: "Invalid field" });
      }
    }

    if (field === "phone") {
      const phonePattern = /^\d{10,}$/;
      if (!phonePattern.test(value)) {
        return res.status(400).json({ message: "Invalid field" });
      }
    }
  }

  const { pincode } = req.body;
  if (typeof pincode === "number") {
    const phonePattern = /^\d{6,}$/;
    if (!phonePattern.test(pincode)) {
      return res.status(400).json({ message: "Invalid field" });
    }
  }


  next();
};


module.exports = { userSignupValidation };