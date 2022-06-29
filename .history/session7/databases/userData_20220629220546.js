const { db } = require("./");

const findByUsername = async (username) => {
  const user = await db.user.findOne({ username: username });
  return user;
};

module.exports = { findByUsername };
