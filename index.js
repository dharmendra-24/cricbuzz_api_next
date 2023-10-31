const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const mongoURI = 'mongodb+srv://dharmendra:0037@cluster0.pb6reer.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB URI

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
app.get('/', (req, res) => {
    res.send('server is running ');
})
const cors = require("cors");
app.use(cors());
const matchroute = require('./controller/matchcontroller.js');
app.use('/api', matchroute);
app.listen(port, () => {
    console.log('server is running ')
});