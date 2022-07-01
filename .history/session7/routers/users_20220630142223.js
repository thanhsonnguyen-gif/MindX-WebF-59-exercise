const express = require("express");
const router = express.Router();
const UserCtrl = require("../controllers/UserController");

router.get("/", async (req, res) => {
  const users = await UserCtrl.usersGetAll();
  if (!users) {
    throw new Error("Database users is entry");
  }
  res.json(users);
});

module.exports = router;
