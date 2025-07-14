const express = require("express");
const zod = require("zod");

const app = express();
app.use(express.json());

// creating middleware funcs to allow people greater than age 14 for an amusement ride

// Way 1
/*
function isOldEnough(age){
    if(age >= 14){
        return true;
    }
    else{
        return false;
    }
}

app.get("/ride1", (req, res) => {
    if(isOldEnough (req.query.age)){
        res.json({
            msg: "You can ride the ride1"
        })
    }
    else{
        res.status(411).json({
            msg: "You cannot ride the ride1"
        })
    }
});

app.listen(3000);
*/

// Way 2
function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age;
    if(age >= 14){
        next();
    }
    else{
        res.json({
            msg: "Your age is less than required, you can't ride any riders"
        })
    }
}

app.use(isOldEnoughMiddleware);

app.get("/ride1", isOldEnoughMiddleware, (req, res) => {
    res.json({
        msg: "You can ride the rider 1"
    })
})

app.get("/ride2", isOldEnoughMiddleware, (req, res) => {
    res.json({
        msg: "You can ride the rider 2"
    })
})

app.listen(3000);