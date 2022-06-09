const express = require("express");
const app = express();
const filmRouter = require("./router/filmRouter");
const loginRouter = require("./router/loginRouter");
const authenMiddleware = require("./middleware/authenMiddleware");

const bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello from 4Film");
});

app.use("/login", loginRouter, authenMiddleware);

app.use("/film", authenMiddleware, filmRouter);

app.listen(3000, () => {
  console.log("app running on port 3000");
});
