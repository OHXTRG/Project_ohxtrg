const jwt = require("jsonwebtoken");

module.exports.generateToken = (data) => {
  console.log(data, "token data");
  const token = jwt.sign(data, process.env.JWT_SECRET);
  console.log(token, "funciton in token");
  return token;
};
