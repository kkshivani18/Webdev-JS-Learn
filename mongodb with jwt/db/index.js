const mongoose = require('mongoose');
const express = require('express')
const app = express();

app.use(express.json());

// Connecting with MongoDB
mongoose.connect('mongodb://localhost:27017/mongodb_jwt_ass');

// defining schemas
const AdminSchema = new mongoose.Schema({
    // schema defn 
    username: String, 
    password: String
});

const UserSchema = new mongoose.Schema({
    // schema defn 
    username: String, 
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // schema defn 
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Courses', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}