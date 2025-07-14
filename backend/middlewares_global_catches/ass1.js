const express = require("express");
// const zod = require("zod");

const app = express();
app.use(express.json());

// - You have to create a middleware for logging the number of requests on a server
/*
You have been given an express server which has a few endpoints.
Your task is to create a global middleware (app.use) which will
maintain a count of the number of requests made to the server in the g₡obal
requestCount variable
*/

/*
let reqCount = 0;

app.use(function(req, res, next){
    reqCount = reqCount + 1;
    next();
})

app.get("/user", function(req, res){
    res.status(200).json({name: 'John'});
});

app.post("/user", function(req, res){
    res.status(200).json({name: 'created a dummy user'});
});

app.get("/reqCount", function(req, res){
    res.status(200).json({reqCount});
});

app.listen(3000);
module.exports = app;
*/


// rate limitter
/*
let numberOfReqForUser = {};
setInterval(() => {
    numberOfReqForUser = {};
}, 1000)

app.use(function(req, res, next){
    const userID = req.headers["user-id"];

    if(numberOfReqForUser[userID]){
        numberOfReqForUser[userID] = numberOfReqForUser[userID] + 1;

        if(numberOfReqForUser > 5){
            res.status(404).send("no entry");
        }
        else{
            next();
        }
    }
    else{
        numberOfReqForUser[userID] = 1;
        next();
    }
})

app.listen(3000);
*/


// error count middleware
// You are given express server an express server which has few endpoints
// The task is
// 1. Ensure that if there's an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an
//    exception in any endpoint 

app.get('/user', function(req, res){
    let a;
    let b = a.length;
    res.status(200).json({name: 'John'});
});

app.post('/user', function(req, res){
    res.status(200).json({msg: 'created dummy user'});
});

app.get('/errorCount', function(req, res){
    res.status(200).json({ errorCount });
});

// error handling middleware
app.use(function (err, req, res, next){
    res.status(404).send({});
    errorCount = errorCount + 1;
})

module.exports = app;

