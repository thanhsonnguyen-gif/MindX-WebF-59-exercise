const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { AuthMdw, requiteAdmin } = require("../middleware/auth");
const UploadCtrl = require("../controllers/ReportController");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "../assets"));
  },
  filename: function (req, file, callback) {
    const suffix = Date.now() + "_" + Math.floor(Math.random() * 1000000);
    console.log(file);
    callback(null, file.fieldname + "_" + suffix + file.originalname);
    req.fileName =
      "http://localhost:3000/assets/" +
      file.fieldname +
      "_" +
      suffix +
      file.originalname;
  },
});

const uploadMdw = multer({ storage: storage });

router.get("/upload", uploadMdw.single("myFile"), (req, res) => {});

router.post("/upload", uploadMdw.single("myFile"), (req, res) => {});

router.put("/upload", uploadMdw.single("myFile"), (req, res) => {});

router.delete("/upload", uploadMdw.single("myFile"), (req, res) => {});

module.exports = router;
