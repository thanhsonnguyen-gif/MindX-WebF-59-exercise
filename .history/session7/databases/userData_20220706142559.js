const { db } = require("./");
const { ObjectId } = require("mongodb");

const findByUsername = async (username) => {
  const users = await db.users.find({ Name: username }).toArray();
  // console.log(username)
  return users;
};

const findByUserId = async (_id) => {
  const user = await db.users.findOne({ _id: ObjectId(_id) });
  return user;
};

const insertPasswordUser = async (_id, comboPassword) => {
  const reports = await db.users.updateOne(
    {
      _id: ObjectId(_id),
    },
    {
      $set: comboPassword,
    },
  );
  return reports;
};

const getUser = async () => {
  const users = await db.users.find({}).toArray();
  return users;
};

const countOfUsers = async ()=>{
  const countUsers = await db.users.countDocument();
  return countUsers
}

module.exports = { findByUsername, insertPasswordUser, getUser, findByUserId, countOfUsers };
