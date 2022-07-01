const express = require("express");
const router = express.Router();
const AuthCtrl = require("../controllers/AuthController");

router.post("/login", (req, res) => {
  res.json("hello from router login");
});

router.post("/register", async (req, res) => {
  // 1.validation
  if (!req.body.password || req.body.password.length < 6) {
    res.status(400).send("password must contain at least 6 character");
  }
  // 2.run logic in register stage
  try {
    const newUser = await AuthCtrl.register(
      req.body.username,
      req.body.email,
      req.body.password,
    );
    res.json(newUser);
  } catch (err) {
    res.status(409).send(err.message);
  }
});

module.exports = router;
