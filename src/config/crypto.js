const crypto = require("crypto");

// Generate and export the secret key
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString("hex");
};

const SecretKey = generateSecretKey();
console.log(SecretKey);
module.exports = SecretKey;
