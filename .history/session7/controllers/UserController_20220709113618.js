const {
  getUser,
  findByUserId,
  findByUsername,
  countOfUsers,
  insertUser,
  updateUserById,
  deleteUserById,
} = require("../databases/userData");

const usersGetAll = async () => {
  // if(!user.isAdmin){
  //     throw new Error('Permission is denied') [Using to get info of user's]
  // }
  const usersByGetAll = await getUser();
  return usersByGetAll;
};

const userGetById = async (user) => {
  const userGetById = await findByUserId(user);
  return userGetById;
};

const userGetByName = async (user) => {
  const userGetByName = await findByUsername(user);
  return userGetByName;
};

const countUsers = async () => {
  const countUsers = await countOfUsers();
  return countUsers;
};

const InsertUser = async (infos) => {
  const UserInserted = await insertUser(infos);
  return UserInserted;
};

const updateUserInfo = async (_id, infoUpdate) => {
  const UserUpdated = await updateUserById(_id, infoUpdate);
  return UserUpdated;
};

const deleteUser = async (id) => {
  const infoDelete = await deleteUserById(id);
  return infoDelete;
};

// const addFiledById = async (_id, infoUpdate) => {
//   const infoUserUpdated = await insertFiledById(_id, infoUpdate);
//   return infoUserUpdated;
// };

module.exports = {
  usersGetAll,
  userGetById,
  userGetByName,
  countUsers,
  InsertUser,
  updateUserInfo,
  deleteUser,
};
