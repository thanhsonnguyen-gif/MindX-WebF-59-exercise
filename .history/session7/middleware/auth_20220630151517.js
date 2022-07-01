const jwt = require("jsonwebtoken");

const AuthMdw = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    res.status(401).send("bearer token is missing");
  }
  const token = bearerToken.split("")[1];
  jwt.verify(token, "MY_PRIMATE_KEY", (err, decodeInfo) => {
    if (err) {
      res.status(401).send("Invalid token");
    } else {
      console.log(decodeInfo);
      next();
    }
  });
};

module.exports = AuthMdw;
