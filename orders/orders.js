const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://linda:linda@cluster0-rwpdw.mongodb.net/test?retryWrites=true&w=majority")
        .then(() => console.log("Database connects successfully!"))
        .catch(err => console.log(err))


const Order = require("./Order");

app.post("/order", (req, res) => {
    const newOrder = new Order({
        CustomerID: mongoose.Types.ObjectId(req.body.CustomerID),
        BookID: mongoose.Types.ObjectId(req.body.BookID),
        initialDate: req.body.initialDate,
        deliveryDate: req.body.deliveryDate
    })

    newOrder.save()
            .then(order => res.json(order))
            .catch(err => res.json(err.message))
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())



app.listen(7777, () => console.log("This is our orders service!"))