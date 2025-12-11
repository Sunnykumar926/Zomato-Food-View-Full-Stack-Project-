// Create server

const express = require("express");
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hello World I AM sunny");
})

app.use('/api/auth', authRoutes)
app.use('/api/food', foodRoutes)

module.exports = app;