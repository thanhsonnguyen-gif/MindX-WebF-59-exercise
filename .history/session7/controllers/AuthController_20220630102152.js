const { findByUsername, insertUser } = require("../databases/userData");
const crypto = require("crypto");

const login = (username, password) => {};

const register = async (username, email, password) => {
  //Step 1: check email is existed
  const userExisted = await findByUsername(username);
  if (userExisted) {
    throw new Error("User is existed");
  }
  //Step 2: Encrypt the password
  const { salt, hashedPassword } = EncryptPassword(password);
  //Step 3: Store inside databases
  const userInserted = await insertUser({
    username: username,
    email: email,
    salt: salt,
    hashedPassword: hashedPassword,
  });
  return userInserted;
};

const EncryptPassword = (password) => {
  //private key for single user
  const salt = crypto.randomBytes(128).toString("hex");
  //hashed password
  const hashedPassword = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  // return outside
  return {
    salt: salt,
    hashedPassword: hashedPassword,
  };
};

module.exports = { login, register };
