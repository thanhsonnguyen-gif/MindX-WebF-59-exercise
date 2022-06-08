const User = [
  { username: "alice", apiKey: "alice@123" },
  { username: "bob", apiKey: "bob@123" },
  { username: "charlie", apiKey: "charlie@123" },
];

function checkLogUser (req, res, next){
    const indexUser = User.findIndex((el)=>{
        return (el.username === req.body.username && el.apiKey ===req.body.apiKey)
    })
    if(indexUser <0){
        res.send('Unauthorized')
    } else {
        next();
    }
}

module.exports = checkLogUser