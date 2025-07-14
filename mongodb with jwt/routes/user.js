const express = require('express');
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("..");

