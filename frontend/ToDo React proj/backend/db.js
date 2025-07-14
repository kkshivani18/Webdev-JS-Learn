const mongoose = require('mongoose');
const express = require('express')
const app = express();

app.use(express.json());

// Connecting with MongoDB
mongoose.connect('mongodb://localhost:27017/userapp');

// defining schemas
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}