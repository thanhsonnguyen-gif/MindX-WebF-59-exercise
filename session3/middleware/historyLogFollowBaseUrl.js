let countLogUser = [
    { user: "alice", student: 0, teacher: 0, subject: 0 },
    { user: "bob", student: 0, teacher: 0, subject: 0 },
    { user: "charlie", student: 0, teacher: 0, subject: 0 },
  ];
  
  function countLogMiddleware(req, res, next) {
    countLogUser.forEach((el) => {
      if (el.user === req.body.username && req.baseUrl === "/student") {
        el.student++;
      } else if (
        el.user === req.body.username &&
        req.baseUrl === "/teacher"
      ) {
        el.teacher++;
      } else if (
        el.user === req.body.username &&
        req.baseUrl === "/object"
      ) {
        el.subject++;
      }
    });
    console.log(countLogUser);
    next();
  }
  
  module.exports = countLogMiddleware;