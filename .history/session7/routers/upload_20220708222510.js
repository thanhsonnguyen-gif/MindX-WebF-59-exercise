const express = require("express");
const router = express.Router();
const { AuthMdw, requiteAdmin } = require("../middleware/auth");
const { requiteAdminForReport } = require("../middleware/upload");
const UploadCtrl = require("../controllers/ReportController");
const UserCtrl = require("../controllers/UserController");
const multer = require("multer");
const path = require("path");
const { db } = require("../databases");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "../assets"));
  },
  filename: function (req, file, callback) {
    const suffix = Date.now() + "_" + Math.floor(Math.random() * 1000000);
    // console.log(file);
    let fileType = "";
    if (file.mimetype == "application/pdf") {
      fileType = ".pdf";
    }
    const fileName = file.fieldname + "_" + suffix + file.originalname;
    req["fileAttach"] = `${path.join(__dirname, "../assets")}/${fileName}`;
    callback(null, fileName);
  },
});

const uploadMdw = multer({ storage: storage });
const cpUpload = uploadMdw.fields([{ name: "myFile", maxCount: 5 }]);

router.post(
  "/upload",
  AuthMdw,
  requiteAdminForReport,
  cpUpload,
  async (req, res) => {
    const numberReports = await UploadCtrl.countReports();
    const { name = "defaultName" } = req.body;
    const newReport = await UploadCtrl.addReport({
      ID: numberReports + 1,
      name,
      fileAttach: req["fileAttach"],
      userOwnId: req.user._id,
    });
    if (!newReport) {
      throw new Error("Database can't insert new report");
    }

    const reportsId = req.user.reportsId;
    // if (Array.isArray(reportsId)) {
    //   reportsId.push(newReport.insertedId);
    //   await UserCtrl.updateUserInfo(req.user._id, {
    //     reportsId,
    //   });
    // } else if (reportsId){}
    // else {
    //   throw new Error("Database can't update info user after create report");
    // }
    console.log(reportsId);
    const reportInserted = await UploadCtrl.getReportById(newReport.insertedId);
    res.json(reportInserted);
  },
);

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
  const isReportOfCurrentUser = reports.map((items) => {
    if (items._id.toString() === id) {
      return true;
    }
  });
  let report;
  isReportOfCurrentUser.forEach(async (el) => {
    if (el == true) {
      report = await UploadCtrl.updateReportById(id, infoNeedUpdate);
      const infoReportUpdated = await UploadCtrl.getReportById(id);
      res.json(infoReportUpdated);
    } else {
      report = null;
    }
  });
  if (report == null) {
    res
      .status(403)
      .send(
        "databases isn't updated, input id of report may be incorrect or belong another person",
      );
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
