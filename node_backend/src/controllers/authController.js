const Users = require("../models/user");
const { generateToken } = require("../utils/generateToken");

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });
    if (user) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "email id already exits",
      });
    }
    const newUser = await Users.create({ email, password });
    await newUser.generatePassword(password);
    const token = generateToken({ id: newUser.id, email: newUser.email });
    return res.status(200).json({
      status: 200,
      success: true,
      message: "user created successfully",
      token,
    });
  } catch (e) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: "Internal server error" + e.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "user not found",
      });
    }

    const match = user.comparePassword(password);
    if (!match) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Password is incorrect",
      });
    }

    const data = {
      id: user.id,
      email: user.email,
    };
    const token = generateToken(data);

    return res.status(200).json({
      status: 200,
      success: true,
      message: "user logged in",
      token,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      status: 500,
      success: false,
      message: "Internal server error" + e.message,
    });
  }
};
