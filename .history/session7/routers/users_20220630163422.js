const express = require("express");
const router = express.Router();
const UserCtrl = require("../controllers/UserController");
const { AuthMdw } = require("../middleware/auth");

router.get("/", AuthMdw, async (req, res) => {
  try {
    const users = await UserCtrl.usersGetAll(req.user);
    res.json(users);
  } catch (err) {
    res.status(403).send("Your don't have permission");
  }
  if (!users) {
    throw new Error("Database users is entry");
  }
});

module.exports = router;
