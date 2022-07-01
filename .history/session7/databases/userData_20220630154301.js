const { db } = require("./");
const ObjectId = require("mongodb");

const findByUsername = async (username) => {
  const user = await db.users.findOne({ username: username });
  // console.log(username)
  return user;
};

const findByUserId = async (_id) => {
  const user = await db.users.findOne({ _id: ObjectId(_id) });
  return user;
};

const insertUser = async (user) => {
  await db.users.insertOne(user);
  return user;
};

const getUser = async () => {
  const users = await db.users.find({}).toArray();
  return users;
};

module.exports = { findByUsername, insertUser, getUser, findByUserId };
