const { getUser } = require("../databases/userData");

const usersGetAll = async (user) => {
if(!user.isAdmin){
    throw new Error('Permission is denied')
}
  const usersByGetAll = await getUser();
  return usersByGetAll;
};

module.exports = {usersGetAll};
