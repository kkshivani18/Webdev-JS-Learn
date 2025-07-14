// const express = require("express");
// const jwt = require('jsonwebtoken');
// const jwtpasswd = "top-secret";
// const zod = require("zod");

// const emailSchema = zod.string().email();
// const passwordSchema = zod.string().min(6);

// const app = express();
// app.use(express.json());

/*
try{
    let a;
    console.log(a.length);
} 
catch(e){
    console.log("Inside the catch statement");
}

console.log("After try catch");
*/

// Assignment 1

/*
- Write a function that takes in a username and password and returns a JWT token with the
username encoded inside an object. Should return null if the username is not a valid email or if the password
is less than 6 characters. Try using the zod library here

- Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not
verified). Return false otherwise

- Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED.
Return false otherewise
*/

/*
function signinJWT(username, password){
    const usernameRes = emailSchema.safeParse(username);
    const passwordRes = passwordSchema.safeParse(password);
    const signature = jwt.sign({username}, jwtpasswd);

   if(!usernameRes.success || !passwordRes.success){
    return null;
   }

   else{
    return signature;
}
}

const ans = signinJWT("sejal123@gmail.com", "topret90");
console.log(ans);
*/

/*
function decodeJWT(token) {
    const decoded = jwt.decode(token);

    if(decoded){
        return true;
    }

    else{
        return false;
    }
}

const ans = decodeJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
console.log(ans);
*/

/*
function verifyJWT(token){
    let ans = true;
    try{
        jwt.verify(token, jwtpasswd);
    }
    catch(e) {
        ans = false; 
    }
    return ans;
}

const ans = verifyJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvc3M2OEBnbWFpbC5jb20iLCJpYXQiOjE3MzM3NjQwNDksImV4cCI6MTczMzc2NzY0OX0.Hao9dza9ZGP5DiJo3723XLlMAqAaUebIIdaQ6EhHJoo");
console.log(ans);
*/
