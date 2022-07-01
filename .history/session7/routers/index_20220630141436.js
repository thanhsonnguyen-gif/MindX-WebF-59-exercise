const express = require("express");
const router = express.Router();
const routerAuth = require("./auth");
const routerUser = require("./users");

router.use("/auth", routerAuth);
router.use("/users", routerUser);

module.exports = router;
