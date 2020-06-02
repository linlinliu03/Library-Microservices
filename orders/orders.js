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

app.get("/orders", (req, res) => {
    Order.find()
         .then(books => res.json(books))
         .catch(err => res.json(err.message))
})

app.get("/orders/:id", (req, res) => {
    Order.findById(req.params.id)
         .then(order => {
             if(order){
                 axios.get("http://localhost:5555/customer/"+order.CustomerID)
                      .then(customerResponse => {
                        const object = {customerName: customerResponse.data.name, bookTitle: ""}
                        axios.get("http://localhost:4545/book/" + order.BookID)
                             .then(bookResponse => {
                                object.bookTitle = bookResponse.data.title;
                                res.json(object)
                             })
                      })
             }else{
                 res.send("There is no order found!")
             }
         })
         .catch(err => console.log(err))
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())



app.listen(7777, () => console.log("This is our orders service!"))