const express = require("express");
const studentRouter = express.Router();

studentRouter.post("/", (req, res) => {
  res.json("hello form studentRouter");
});

module.exports = studentRouter;
