const express = require("express");
const filmRouter = express.Router();
const Films = require("../constants/listFilm");

filmRouter.get("/", (req, res) => {
  if (req.userRole === "guest") {
    const filmFree = Films.filter((el) => {
      return el.type === "free";
    });
    res.send(filmFree);
  } else {
    res.send(Films);
  }
});

filmRouter.put("/", (req, res) => {
  if (req.userRole === "admin") {
    const newFilm = req.body;
    const newArrayFilm = [...Films, newFilm];
    res.json(newArrayFilm);
  } else {
    res.send("you don't have permission to edit");
  }
});

module.exports = filmRouter;
