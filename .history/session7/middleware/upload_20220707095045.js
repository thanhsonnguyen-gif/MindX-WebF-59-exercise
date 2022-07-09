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

const requiteAdminForReport = (req, res, next) =>{
  if (!req.user || req.user.isAdmin) {
    res.status(403).send("Permission is denied");
  } else {
    next();
  }
}



const uploadMdw = multer({ storage: storage });

module.exports = { uploadMdw , requiteAdminForReport};
