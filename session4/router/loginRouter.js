const express = require("express");
const loginRouter = express.Router();
const jwt = require("jsonwebtoken");
const key = require("../constants/key");
const Admins = require("../constants/Admins");
const Guests = require("../constants/Guests");
const Members = require("../constants/Members");

loginRouter.post("/", (req, res, next) => {
  const arrayUsers = Admins.concat(Guests.concat(Members));
  const indexUser = arrayUsers.findIndex((el) => {
    return el.id === req.body.id && el.name === req.body.name;
  });
  if (indexUser < 0) {
    res.json("you not existed");
    res.status(401);
    return;
  }
  const payloadUser = req.body;
  const token = jwt.sign(payloadUser, key);
  res.json({
    token,
  });
  req.headers.authorization += `bearer ${token}`; // hoi lai mentor
});
module.exports = loginRouter;
