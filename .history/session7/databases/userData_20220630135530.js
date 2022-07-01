const { db } = require("./");

const findByUsername = async (username) => {
  const user = await db.users.findOne({ username: username });
  // console.log(username)
  return user;
};

const insertUser = async (user) => {
  await db.users.insertOne(user);
  return user;
};

const getUser = async () => {
  const users = await db.users.find({}).toArray();
  // return users;
};

module.exports = { findByUsername, insertUser, getUser };
