const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb + srv://linda:linda@cluster0-zi67z.mongodb.net/test?retryWrites=true&w=majority", () => {
    console.log("Connect to database successfully!")
    }
)

app.get("/", (req, res) => {
    res.send("This is our main endpoint!")
})

app.listen(4545, () => console.log("This is our books service!"))