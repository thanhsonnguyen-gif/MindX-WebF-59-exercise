const { insertPasswordUser, findByUserId } = require("../databases/userData");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const login = async (_id, password) => {
  //find user by username
  const existedUser = await findByUserId(_id);
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
  //Step 1: check username is activate
  const userExisted = await findByUserId(_id);
  if (!userExisted) {
    throw new Error(
      "User is not existed, connecting to the school'admin to get the information back",
    );
  }
  if (userExisted.isActivate == true) {
    console.log(userExisted.isActivate);
    throw new Error("User is activated, should login, can't reactivate");
  }
  if (userExisted.isActivate == undefined) {
    //Step 2: Encrypt the password
    const { salt, hashedPassword } = EncryptPassword(password);
    //Step 3: Store inside databases
    const reports = await insertPasswordUser(userExisted._id, {
      salt: salt,
      hashedPassword: hashedPassword,
      isActivate: true,
    });

    if (reports.acknowledged == true) {
      const userWithPassword = await findByUserId(_id);
      return userWithPassword;
    }
  }
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
