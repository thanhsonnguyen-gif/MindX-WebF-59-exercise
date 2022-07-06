const {
  getUser,
  findByUserId,
  findByUsername,
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

module.exports = { usersGetAll, userGetById, userGetByName };
