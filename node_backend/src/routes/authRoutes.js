const express = require("express");
const router = express.Router();

const { login, register } = require("../controllers/authController");

router.route("/signIn").post(login);
router.route("/signUp").post(register);

module.exports = router;
