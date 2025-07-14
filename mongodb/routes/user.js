const express = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const router = express.Router();

router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if the user with this username already exists
    await User.create({
        username: username,
        password: password
    })
    res.json({
        message: "User created successfully"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
  
    try {
      const response = await Course.find({});
      if (!response) return res.status(404).json({ message: 'No Courses found' });
      res.status(200).json({ response });
    } catch (error) {
      console.log(error);
      throw error;
    }
  });

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(403).json({ message: 'User not found' });

    const course = await Course.findOne({ _id: courseId });
    if (!course) return res.status(404).json({ message: 'Course not found' });

    await User.updateOne(
      { username: username },
      { "$push": { purchasedCourses: courseId } }
    );

    res.json({ message: 'Purchase complete' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'An error occurred' });
  }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Fetching purchased courses
    const user = await User.findOne({
        username: req.headers.username
    });
    console.log(user.purchasedCourses);

    const courses = await Course.find({
        _id : {
            "$in": user.purchasedCourses
        }
    });
    res.json({
        courses: courses
    })
})

module.exports = router;