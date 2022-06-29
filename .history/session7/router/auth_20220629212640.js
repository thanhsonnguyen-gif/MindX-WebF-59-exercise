const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {
  res.json("hello from router login");
});
router.post("/register", () => {});

module.exports = router;
