const { getUser } = require("../databases/userData");

const usersGetAll = async (user) => {
  // if(!user.isAdmin){
  //     throw new Error('Permission is denied') // Using to get info of user's
  // }
  const usersByGetAll = await getUser();
  return usersByGetAll;
};

module.exports = { usersGetAll };
