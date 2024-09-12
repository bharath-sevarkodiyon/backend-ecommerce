const userDao = require("../dao/userDao");
const jwt = require("jsonwebtoken");
const md5 = require("md5");

const createUserService = async (req, res) => {
  try {
    const { password, ...otherDetails } = req.body;
    const hashedPassword = md5(password);
    const userData = {
      ...otherDetails,
      password: hashedPassword,
    };
    console.log(userData);

    const data = await userDao.createUser(userData);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getUserService = async (req, res) => {
  try {
    const data = await userDao.getUser();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getSingleUserService = async (req, res) => {
  const userId = req.params.id;
  try {
    const data = await userDao.getSingleUser(userId);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateUserService = async (req, res) => {
  const userId = req.params.id;
  const { password, ...otherDetails } = req.body;
  const updateData = { ...otherDetails };
  if (password) {
    updateData.password = md5(password);
  }
  try {
    const data = await userDao.updateUser(userId, updateData);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const removeUserService = async (req, res) => {
  const userId = req.params.id;
  try {
    const data = await userDao.removeUser(userId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteUserService = async (req, res) => {
  try {
    const data = await userDao.deleteUsers();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginUserService = async (req, res) => {
  try {
    const email = req.body.email.toLowerCase();
    const password = req.body.password;
    const hashedPassword = md5(password);

    const user = await userDao.findUser(email, hashedPassword);

    const SECRET_KEY =
      "9d48318c446f31b657864aa5a2873da3c2fa5b51af4964a8ad6c280153316851";

    if (user && user.password === hashedPassword) {
      const token = jwt.sign(
        { email: user.email, role: user.role },
        SECRET_KEY,
        { expiresIn: "6h" }
      );

      res.cookie("authToken", token, {
        httpOnly: true,
        secure: true, // Use secure cookies in production
        sameSite: 'none',
        maxAge: 6 * 60 * 60 * 1000,
      });

      return res
        .status(200)
        .json({ message: "User login successfully", data: user, token });
    } else {
      return res.status(400).json({ message: "User login failed" });
    }
  } catch (error) {
    console.log("User Service Error:", error);
    return res.status(400).json({ message: "Invalid user email or password" });
  }
};

const logoutUserService = (req, res) => {
  try {
    res.clearCookie("authToken", { httpOnly: true });
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred during logout" });
  }
};

module.exports = {
  createUserService,
  getUserService,
  getSingleUserService,
  updateUserService,
  removeUserService,
  deleteUserService,
  loginUserService,
  logoutUserService,
};
