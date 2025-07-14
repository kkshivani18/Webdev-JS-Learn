/*
const mongoose = require('mongoose');
const express = require('express')
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/userapp');

const User = mongoose.model('Users', {name: String, email: String, password: String});

app.post('/signup', async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email: username});

    if(existingUser){
        return res.status(400).send("Username already exists");
    }

    await User.create({name, email: username, password});
    
    // const user = new User({
    //     name: name,
    //     email: username,
    //     password: password
    // });

    user.save();
    res.json({
        "msg": "User created"
    })
})
*/

/*
const u = new User({
    name: 'Mizu', 
    email: 'mizu@gmail.com', 
    password: '12345'});
u.save().then(() => console.log('meow'));
*/