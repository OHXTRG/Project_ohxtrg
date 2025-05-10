const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.methods.generatePassword = async function (plainPass) {
  const hashed_pass = bcrypt.hashSync(plainPass, 10);
  this.password = hashed_pass;
  return this.save();
};

UserSchema.methods.comparePassword = function (pass) {
  const hashed_pass = this.password;
  const match = bcrypt.compareSync(pass, hashed_pass);
  return match;
};

const Users = mongoose.model("users", UserSchema);

module.exports = Users;
