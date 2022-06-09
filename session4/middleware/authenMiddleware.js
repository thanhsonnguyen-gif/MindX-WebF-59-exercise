const jwt = require("jsonwebtoken");
const key = require("../constants/key");
const Admins = require("../constants/Admins");
const Guests = require("../constants/Guests");
const Members = require("../constants/Members");

function authenMiddleware(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  let decodeObject;
  try {
    decodeObject = jwt.verify(token, key);
  } catch (err) {
    res.json(err);
    res.status(401);
    return;
  }

  if (decodeObject) {
    const indexGuest = Guests.findIndex((el) => {
      return el.id === decodeObject.id && el.name === decodeObject.name;
    });
    const indexMember = Members.findIndex((el) => {
      return el.id === decodeObject.id && el.name === decodeObject.name;
    });
    const indexAdmin = Admins.findIndex((el) => {
      return el.id === decodeObject.id && el.name === decodeObject.name;
    });

    if (indexGuest >= 0) {
      req["userRole"] = "guest";
    }
    if (indexMember >= 0) {
      req["userRole"] = "member";
    }
    if (indexAdmin >= 0) {
      req["userRole"] = "admin";
    }
    next();
  }
}
module.exports = authenMiddleware;
