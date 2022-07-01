const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "../assets"));
  },
  filename: function (req, file, callback) {
    const suffix = Date.now() + "_" + Math.floor(Math.random() * 1000000);
    console.log(file);
    callback(null, file.filename + "_" + suffix);
  },
});

const uploadMdw = multer({ storage: storage });

router.post("/upload", uploadMdw.single("myFile"), (req, res) => {});

module.exports = router;
