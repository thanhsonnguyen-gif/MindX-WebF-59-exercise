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

const countOfUsers = async () => {
  const countUsers = await db.users.countDocuments();
  return countUsers;
};

const insertUser = async (infoObject) => {
  const userInserted = await db.users.insertOne(infoObject);
  return userInserted;
};

const updateUserById = async (_id, infoUpdate) => {
  const reports = await db.users.updateOne(
    {
      _id: ObjectId(_id),
    },
    {
      $set: infoUpdate,
    },
  );
  return reports;
};

const deleteUserById = async (id) => {
  const report = await db.users.deleteOne({
    _id: ObjectId(id),
  });
  return report;
};

// const insertFiledById = async (id, idOfReport) => {
//   console.log(id);
//   const infoUserAfterInsert = db.users.aggregate([
//     { $match: { _id: id } },
//     { $addFields: { reportsId: { idOfReport } } },
//   ]);
//   return infoUserAfterInsert[0];
// };

module.exports = {
  findByUsername,
  insertPasswordUser,
  getUser,
  findByUserId,
  countOfUsers,
  insertUser,
  updateUserById,
  deleteUserById,
  insertFiledById,
};
