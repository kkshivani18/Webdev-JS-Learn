const { Admin } = require('../db');

//Middleware for handling auth
// Have to implement admin auth logic 
// need to check the headers and validate the admin from admin DB
function adminMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({
        username: username,
        password: password
    })
    .then(function(value){
        if(value){
            next();
        }
        else{
            res.status(403).json({
                msg: "Admin doesn't exist"
            });
        }
    });
}

module.exports = adminMiddleware;