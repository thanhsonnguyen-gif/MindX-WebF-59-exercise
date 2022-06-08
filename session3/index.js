const express = require("express");
const app = express();
const port = 3000;
const studentRouter = require("./router/student");
const subjectRouter = require("./router/subject");
const teacherRouter = require("./router/teacher");
const checkLogUser = require("./middleware/checkLog");
const historyLogUser = require("./middleware/historyLog");
const countLogMiddleware = require("./middleware/historyLogFollowBaseUrl");
const bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello from session3");
});

app.use(
  "/student",
  checkLogUser,
  historyLogUser,
  countLogMiddleware,
  studentRouter
);
app.use(
  "/subject",
  checkLogUser,
  historyLogUser,
  countLogMiddleware,
  subjectRouter
);
app.use(
  "/teacher",
  checkLogUser,
  historyLogUser,
  countLogMiddleware,
  teacherRouter
);

app.listen(port, () => {
  console.log(`App running in port ${port}`);
});
