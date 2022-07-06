const express = require("express");
const router = express.Router();

const { AuthMdw, requiteAdmin } = require("../middleware/auth");
const UploadCtrl = require("../controllers/ReportController");

router.post("/upload", AuthMdw, uploadMdw.single("myFile"), (req, res) => {});

router.get("/upload", uploadMdw.single("myFile"), (req, res) => {});

router.put("/upload", uploadMdw.single("myFile"), (req, res) => {});

router.delete("/upload", uploadMdw.single("myFile"), (req, res) => {});

module.exports = router;
