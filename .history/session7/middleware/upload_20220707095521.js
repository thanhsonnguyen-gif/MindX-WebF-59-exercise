
const requiteAdminForReport = (req, res, next) =>{
  if (!req.user || req.user.isAdmin) {
    res.status(403).send("Permission is denied");
  } else {
    next();
  }
}

module.exports = {requiteAdminForReport};
