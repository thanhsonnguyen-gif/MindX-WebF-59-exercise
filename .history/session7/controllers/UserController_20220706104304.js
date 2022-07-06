const { getUser, findByUserId } = require("../databases/userData");

const usersGetAll = async (user) => {
  // if(!user.isAdmin){
  //     throw new Error('Permission is denied') [Using to get info of user's]
  // }
  const usersByGetAll = await getUser();
  return usersByGetAll;
};

const userGetById = async (user) =>{
  const userGetById = await findByUserId(user);
  return userGetById;
}

module.exports = { usersGetAll, userGetById };
