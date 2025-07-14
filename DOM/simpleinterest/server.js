const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');


app.use(cors());
app.use(express.json());

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve the static HTML file
app.use(express.static(path.join(__dirname, 'simpleinterest')));

app.post('/calculate-interest', (req, res) => {
    const { principal, rate, time } = req.body;

    if(!principal || !rate || !time){
        return res.status(400).json({error: "All fields are required"});
    }

    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;

    res.json({interest, totalAmount});
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});