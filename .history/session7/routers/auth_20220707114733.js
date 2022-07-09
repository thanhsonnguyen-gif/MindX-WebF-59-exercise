const express = require("express");
const router = express.Router();
const AuthCtrl = require("../controllers/AuthController");

router.post("/login", async (req, res) => {
  // Step 1: validation
  // Step 2: Run login's logic
  try {
    const userIslogged = await AuthCtrl.login(
      req.body._id,
      req.body.password,
    );
    res.json(userIslogged);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/register", async (req, res) => {
  // 1.validation
  if (!req.body.password || req.body.password.length < 6) {
    res.status(400).send("password must contain at least 6 character");
  }
  // 2.run logic in register stage
  try {
    const infoOfPasswordUserRegistered = await AuthCtrl.register(
      req.body._id,
      req.body.password,
    );
    res.json(infoOfPasswordUserRegistered);
  } catch (err) {
    res.status(409).send(err.message);
  }
});

module.exports = router;
