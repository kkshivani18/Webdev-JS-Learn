// npm init -y
// npm install express

// Authentication
// 1. Hashing -> (1 way)
// 2. Encryption -> (2 way) 
// 3. JSON web token
// 4. Local storage

//-----------------------------------------------------------------------------------------------------------------------------------

// Assignment - website with 2 endpoints 

// post - /signin 
// Body {
//     username: String,
//     password: String
// } -> returns json web token with username encrypted

// get - /users
// Headers - authorization header
// returns an array of all users if user is signed in (token is correct)
// returns 403 status code if not

const express = require("express");
const jwt = require('jsonwebtoken');
const jwtpasswd = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
    { username: "racheal12@gmail.com", password: "1234", name: "Racheal Smith" },
    { username: "monica23@gmail.com", password: "3456", name: "Monica Dona" },
    { username: "chandler28@gmail.com", password: "7891", name: "Chandler Watson" },
    { username: "ross68@gmail.com", password: "7891", name: "Ross Dona" }
];

function userExists(username, password) {
    return ALL_USERS.some(user => user.username === username && user.password === password);
}

app.post("/signin", (req, res) => {
    const { username, password } = req.body;
    if (!ALL_USERS.find(user => user.username === username && user.password === password)) {
        return res.status(403).json({ msg: "User doesn't exist in the database" });
    }
    var token = jwt.sign({ username }, jwtpasswd, { expiresIn: '1h' });
    return res.json({ token });
});

app.get("/users", (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, jwtpasswd);
    const username = decoded.username;

    return res.json({
        users: ALL_USERS.filter(function(value) {
            if(value.username == username){
                return false
            } else{
                return true;
            }
        })
    })

    // return the name of the user
    
    // if (!token) {
    //     return res.status(403).json({ msg: "Token missing" });
    // }
    // try {
    //     const decoded = jwt.verify(token, jwtpasswd);
    //     const username = decoded.username;

    //     const user = ALL_USERS.find(u => u.username === username);
    //     if (!user) {
    //         return res.status(403).json({ msg: "User not found" });
    //     }

    //     return res.json({ msg: `Welcome, ${user.name}` });
    // } catch (err) {
    //     return res.status(403).json({ msg: "Invalid token" });
    // }
});

app.listen(3000);

// The secrets keys or jwt tokens are stored in github secrets, AWS secret manager, Kubernetes pipelines in secrets. 


// week 3.2
// databases and auth
// 1:43:19 --> [Object][object]
// fetch can resolve and also stringify