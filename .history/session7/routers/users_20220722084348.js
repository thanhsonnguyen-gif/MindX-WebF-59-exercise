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
  const numberUsers = await UserCtrl.countUsers();
  const {
  //  Name: Name = "default value", //from Request: "Name":"son"
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
  const users = await UserCtrl.InsertUser({
    ID: (numberUsers + 1).toString(),
    Name,
    Gender,
    Class,
    Club,
    Persona,
    Crush,
    BreastSize,
    Strength,
    Hairstyle,
    Color,
    Stockings,
    Accessory,
    ScheduleTime,
    ScheduleDestination,
    ScheduleAction,
  });
  if (!users) {
    throw new Error("Database isn't inserted");
  }
  const infoUserInserted = await UserCtrl.userGetById(users.insertedId);
  res.json(infoUserInserted);
});

router.put("/", AuthMdw, requiteAdmin, async (req, res) => {
  const id = req.headers._id
  const infoNeedUpdate = req.body
  const user = await UserCtrl.updateUserInfo(id, infoNeedUpdate)
  if (!user) {
    throw new Error("Database isn't updated");
  }
  const infoUserUpdated = await UserCtrl.userGetById(id);
  res.json(infoUserUpdated);
});

router.delete("/", AuthMdw, requiteAdmin, async (req, res) => {
  const id = req.headers._id
  const user = await UserCtrl.deleteUser(id)
  if (!user) {
    throw new Error("Database isn't delete");
  }
  res.json(user);
});

module.exports = router;
