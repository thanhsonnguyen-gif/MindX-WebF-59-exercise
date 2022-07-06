const jwt = require("jsonwebtoken");
const { findByUserId } = require("../databases/userData");

const AuthMdw = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    res.status(401).send("bearer token is missing");
  }
  const token = bearerToken.split(" ")[1];
  
  jwt.verify(token, "MY_PRIMATE_KEY", async (err, decodeInfo) => {
    if (err) {
      res.status(401).send("Invalid token");
      
    } else {
      const user = await findByUserId(decodeInfo.userID);
      req.user = user;
      next();
    }
  });
};

const requiteAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    res.status(403).send("Permission is denied");
  } else {
    next();
  }
};

module.exports = { AuthMdw, requiteAdmin };
