// const { Admin } = require('../db');

// jwt saves us 1DB call
const jwt = require('jsonwebtoken');
const secret = require("../index");

//Middleware for handling auth
// Have to implement admin auth logic 
// need to check the headers and validate the admin from admin DB
function adminMiddleware(req, res, next){
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodedVal = jwt.verify(jwtToken, secret);

    if(decodedVal.username){
        next();
    }
    else{
        res.status(403).json({
            msg: "You aren't authenticated"
        })
    }
}

module.exports = adminMiddleware;