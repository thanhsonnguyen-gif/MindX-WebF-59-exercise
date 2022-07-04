const express = require("express");
const router = express.Router();
const UserCtrl = require("../controllers/UserController");
const { AuthMdw, requiteAdmin } = require("../middleware/auth");

router.get("/", AuthMdw, requiteAdmin, async (req, res) => {
  const users = await UserCtrl.usersGetAll(req.user);
  //   try {
  //     res.json(users);
  //   } catch (err) {
  //     res.status(403).send("Your don't have permission");
  //   }
  if (!users) {
    throw new Error("Database users is entry");
  }
  res.json(users);
});

router.post("/", AuthMdw, requiteAdmin, async (req, res) => {
  const users = await UserCtrl.usersGetAll(req.user);
  //   try {
  //     res.json(users);
  //   } catch (err) {
  //     res.status(403).send("Your don't have permission");
  //   }
  if (!users) {
    throw new Error("Database users is entry");
  }
  res.json(users);
});

router.put("/", AuthMdw, requiteAdmin, async (req, res) => {
  const users = await UserCtrl.usersGetAll(req.user);
  //   try {
  //     res.json(users);
  //   } catch (err) {
  //     res.status(403).send("Your don't have permission");
  //   }
  if (!users) {
    throw new Error("Database users is entry");
  }
  res.json(users);
});

router.delete("/", AuthMdw, requiteAdmin, async (req, res) => {
  const users = await UserCtrl.usersGetAll(req.user);
  //   try {
  //     res.json(users);
  //   } catch (err) {
  //     res.status(403).send("Your don't have permission");
  //   }
  if (!users) {
    throw new Error("Database users is entry");
  }
  res.json(users);
});


module.exports = router;
