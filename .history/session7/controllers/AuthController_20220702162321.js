const {
  findByUsername,
  insertPasswordUser,
  findByUserId,
} = require("../databases/userData");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const login = async (username, password) => {
  //find user by username
  const existedUser = await findByUsername(username);
  if (!existedUser) {
    throw new Error("User does not exist");
  }
  if (!verifyPassword(password, existedUser)) {
    throw new Error("Password are not match");
  }
  //create jwt token
  const token = await jwt.sign({ userID: existedUser._id }, "MY_PRIMATE_KEY", {
    expiresIn: 60 * 60,
  });
  return {
    user: existedUser,
    token: token,
  };
};

const register = async (_id, password) => {
  //Step 1: check username is existed
  const userExisted = await findByUserId(_id);
  if (!userExisted) {
    throw new Error(
      "User is not existed, connecting to the school'admin to get the information back",
    );
  }
  //Step 2: Encrypt the password
  const { salt, hashedPassword } = EncryptPassword(password);
  //Step 3: Store inside databases
  await insertPasswordUser(userExisted._id, {
    salt: salt,
    hashedPassword: hashedPassword,
    isActivate: true,
  });
  return userExisted;
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

const verifyPassword = (password, user) => {
  const hashedPasswordCheck = crypto
    .pbkdf2Sync(password, user.salt, 1000, 64, "sha512")
    .toString("hex");
  return hashedPasswordCheck === user.hashedPassword;
};

module.exports = { login, register };
