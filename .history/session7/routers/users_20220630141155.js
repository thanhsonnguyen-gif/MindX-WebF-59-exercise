const express = require("express");
const router = express.Router();
const UserCtrl = require("../controllers/UserController");

router.get("/", UserCtrl.usersGetAll);

module.exports = router;
