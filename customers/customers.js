const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://linda:linda@cluster0-x3rmy.mongodb.net/customer?retryWrites=true&w=majority", {useNewUrlParser: true, auto_reconnect: true})
        .then(() => console.log("Connect database successfully!"))
        .catch(err => console.log(err))

const Customer = require("./Customer");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post("/customer", (req, res) => {
    const newCustomer = new Customer({
        name: req.body.name,
        age: req.body.age,
        address: req.body.name
    })

    newCustomer.save()
               .then(customer => res.json(customer))
               .catch(err => res.json(err.message))
})

app.get("/customers", (req, res) => {
    Customer.find()
            .then(customers => res.json(customers))
            .catch(err => res.json(err.message))
})

app.get("/customer/:id", (req, res) => {
    Customer.findById(req.params.id)
            .then(customer => res.json(customer))
            .catch(err => res.json(err.message))
})

app.delete("/customer/:id", (req, res) => {
    Customer.findByIdAndRemove(req.params.id)
            .then(customer => res.json(customer))
            .catch(err => res.json(err.message))
})

app.listen(5555, () => console.log("This is our customer service!"))