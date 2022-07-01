const { db } = require("./");

const findByUsername = async (username) => {
  const user = await db.user.findOne({username});
  return user;
};

const insertUser = async (user) => {
  await db.user.insertOne(user);
  return user;
};

module.exports = { findByUsername, insertUser };
