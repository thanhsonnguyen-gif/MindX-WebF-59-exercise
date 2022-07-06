const express = require("express");
const router = express.Router();
const UserCtrl = require("../controllers/UserController");
const { AuthMdw, requiteAdmin } = require("../middleware/auth");

router.get("/", AuthMdw, async (req, res) => {
  const { _id, Name } = req.body;
  if (_id) {
    if (!req.user || !req.user.isAdmin) {
      res
        .status(403)
        .send("Permission is denied, you only can get your information");
    } else {
      const user = await UserCtrl.userGetById(_id);
      if (!user) {
        throw new Error("Database users is entry");
      }
      res.json(user);
    }
  } else if (Name) {
    if (!req.user || !req.user.isAdmin) {
      res
        .status(403)
        .send("Permission is denied, you only can get your information");
    } else {
      const users = await UserCtrl.userGetByName(Name);
      if (!users) {
        throw new Error("Database users is entry");
      }
      res.json(users);
    }
  } else {
    if (!req.user.isAdmin) {
      const user = await UserCtrl.userGetById(req.user._id);
      if (!user) {
        throw new Error("Database users is entry");
      }
      res.json(user);
    } else {
      const users = await UserCtrl.usersGetAll();
      if (!users) {
        throw new Error("Database users is entry");
      }
      res.json(users);
    }
  }
  //   try {
  //     res.json(users);                             [...]
  //   } catch (err) {
  //     res.status(403).send("Your don't have permission");
  //   }
});

router.post("/", AuthMdw, requiteAdmin, async (req, res) => {
  const numberUsers = UserCtrl.countUsers();
  const {
    Name = "default value",
    Gender = "default value",
    Class = "default value",
    Club = "default value",
    Persona = "default value",
    Crush = "default value",
    BreastSize = "default value",
    Strength = "default value",
    Hairstyle = "default value",
    Color = "default value",
    Stockings = "default value",
    Accessory = "default value",
    ScheduleTime = "default value",
    ScheduleDestination = "default value",
    ScheduleAction = "default value",
  } = req.body;
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
