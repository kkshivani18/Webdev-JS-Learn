const { User } = require('../db');

//Middleware for handling auth
// Have to implement User auth logic 
// need to check the headers and validate the User from User DB
function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;
    User.findOne({
        username: username,
        password: password
    })
    .then(function(value){
        if(value){
            next();
        }
        else{
            res.status(403).json({
                msg: "User doesn't exist"
            })
        }
    })
}

module.exports = userMiddleware;