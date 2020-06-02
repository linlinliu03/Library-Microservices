const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://linda:linda@cluster0-x3rmy.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true, auto_reconnect: true})
        .then(() => console.log("Connect database successfully!"))
        .catch(err => console.log(err))

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(5555, () => console.log("This is our customer service!"))