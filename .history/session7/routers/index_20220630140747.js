const express = require("express");
const router = express.Router();
const routerAuth = require("./auth");
const routerUser = require("./users");

router.use("/auth", routerAuth);
router.use("/get", routerUser);

module.exports = router;
