const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173", // Your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.post("/todos", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong inputs sent"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "ToDo created"
    })
});

app.get("/todos", async function(req, res) {
    try {
        const todos = await todo.find({});
        if (!todos) return res.status(404).json({ message: 'No ToDos found' });
      res.status(200).json({ todos });
    } catch (error) {
        console.log(error);
        throw error;
    }
});

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedupPayload = updateTodo.safeParse(updatePayload);

    if(!parsedupPayload.success){
        res.status(411).json({
            msg: "Wrong id sent"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "ToDo marked as completed"
    })
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
