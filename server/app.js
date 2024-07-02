const express = require('express')
const mongoose = require('mongoose');
const morgan = require('morgan');
const connectDB = require("./config/db")
const app = express();



//middleware
app.use(express.json())
app.use(morgan("tiny"))



//server configh
const PORT = process.env.PORT || 8000;
app.listen(PORT, async() => {
    await connectDB();
    console.log(`server listening on port : ${PORT}`)
});