const express = require("express");
const router = express.Router();
const { AuthMdw, requiteAdmin } = require("../middleware/auth");
const { requiteAdminForReport } = require("../middleware/upload");
const UploadCtrl = require("../controllers/ReportController");
const multer = require("multer");
const path = require("path");

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

router.post("/upload", AuthMdw, uploadMdw.single("myFile"), (req, res) => {});

router.get("/upload", AuthMdw, async (req, res) => {
const { _id, Name } = req.body;
  if (_id) {
    if (!req.user || !req.user.isAdmin) {
      res
        .status(403)
        .send("Permission is denied, you only can get your reports");
    } else {
      const report = await UploadCtrl.getReportById(_id);
      if (!report) {
        throw new Error("Database report is entry");
      }
      res.json(report);
    }
  } else if (Name) {
    if (!req.user || !req.user.isAdmin) {
      res
        .status(403)
        .send("Permission is denied, you only can get your reports");
    } else {
      const reports = await UploadCtrl.getReportByName(Name);
      if (!reports) {
        throw new Error("Database reports is entry");
      }
      res.json(reports);
    }
  } else {
    if (req.user.isAdmin) {
        const reports = await UploadCtrl.getAllReports();
      if (!reports) {
        throw new Error("Database reports is entry");
      }
      res.json(reports);
     
    } else {
        // const  reports= await UserCtrl.userGetById(req.user._id);
        // if (!user) {
        //   throw new Error("Database users is entry");
        // }
        // res.json(user);
    }
  }
});

router.put("/upload", uploadMdw.single("myFile"), (req, res) => {});

router.delete("/upload", uploadMdw.single("myFile"), (req, res) => {});

module.exports = router;
