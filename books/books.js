const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("This is our main endpoint!")
})

app.listen(4545, () => console.log("This is our books service!"))