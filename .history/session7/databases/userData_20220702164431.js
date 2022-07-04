const { db } = require("./");
const {ObjectId} = require("mongodb");

const findByUsername = async (username) => {
  const user = await db.users.findOne({ Name: username });
  // console.log(username)
  return user;
};

const findByUserId = async (_id) => {
  const user = await db.users.findOne({ _id: ObjectId(_id) });
  return user;
};

const insertPasswordUser = async (_id, comboPassword) => {
  await db.users.updateOne({
    "_id":ObjectId(_id)
  },{
    $set: comboPassword
  });
};

const getUser = async () => {
  const users = await db.users.find({}).toArray();
  return users;
};

module.exports = { findByUsername, insertPasswordUser, getUser, findByUserId };
