const crypto = require("crypto");

const randomhex = () => {
  // toString() is of prototype of number
  return Array.from({ length: 10 }).map((ele) =>
    Math.floor(Math.random() * 16).toString(16)
  );
};
console.log(randomhex());
// toString() is of prototype of buffer
console.log(crypto.randomBytes(16).toString("hex"));
