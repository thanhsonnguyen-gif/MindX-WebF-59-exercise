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
      // console.log(req.user._id)
      const reports = await UploadCtrl.getReportsByUserId(req.user._id);
      if (!reports) {
        throw new Error("Database reports is entry");
      }
      res.json(reports);
    }
  }
});

router.put("/upload", AuthMdw, requiteAdminForReport, async (req, res) => {
  const id = req.headers._id;
  const infoNeedUpdate = req.body;
  const reports = await UploadCtrl.getReportsByUserId(req.user._id);
  const isReportOfCurrentUser = reports.forEach((items) => {
    if (items._id.toString() === id) {
      return true;
    }
  });
  console.log(isReportOfCurrentUser);
  try {
    if (isReportOfCurrentUser) {
      const report = await UploadCtrl.updateReportById(id, infoNeedUpdate);
      if (!report) {
        throw new Error(
          "Database isn't updated, check id of report form request",
        );
      }
      const infoReportUpdated = await UploadCtrl.getReportById(id);
      res.json(infoReportUpdated);
    } else {
      throw new Error("the report is owned by another person");
    }
  } catch {
    (err) => {
      res.status(403).send(err);
    };
  }
});

router.delete("/upload", AuthMdw, requiteAdmin, async (req, res) => {
  const id = req.headers._id;
  const report = await UploadCtrl.deleteReportsById(id);
  if (!report) {
    throw new Error("Database isn't delete");
  }
  res.json(report);
});

module.exports = router;
