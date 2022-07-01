const express = require("express");
const router = express.Router();
const routerAuth = require("./auth");
const routerUser = require("./users");
const uploadRouter = require("./upload");

router.use("/auth", routerAuth);
router.use("/users", routerUser);
router.use("/assets", uploadRouter);

module.exports = router;
