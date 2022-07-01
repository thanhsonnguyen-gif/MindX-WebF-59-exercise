const { getUser } = require("../databases/userData");

const usersGetAll = async () => {
  const usersByGetAll = await getUser();
  return usersByGetAll;
};

module.exports = usersGetAll;
