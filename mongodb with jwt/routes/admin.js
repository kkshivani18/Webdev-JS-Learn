const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("..");
const app = express();

app.use(adminMiddleware);

router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if the user with this username already exists
    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        message: "Admin created successfully"
    })
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if(user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token
        });
    }
    else{
        res.status(411).json({
            message: "Incorrect email or password"
        })
    }
});

module.exports = router;