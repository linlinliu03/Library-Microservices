const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())



app.listen(7777, () => console.log("This is our orders service!"))