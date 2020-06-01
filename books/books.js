const express = require("express");
const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const Book = require("./Book");

mongoose
    .connect("mongodb+srv://linda:linda@cluster0-zi67z.mongodb.net/books?retryWrites=true&w=majority")
    .then(() => console.log("Connect database correctly!"))

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("This is our main endpoint!")
})

app.post("/book", (req, res) => {

    
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        numberPages: req.body.numberPages,
        publisher: req.body.publisher
    })

   newBook.save()
          .then(book => res.json(book))
          .catch(err => res.json(err.message))
})


app.get("/books", (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.json(err.message))
})

app.get("/book/:id", (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({notFund: "No such book found!"}))
})

app.delete("/book/:id", (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({ notFund: "No such book found!"}))
})

app.listen(4545, () => console.log("This is our books service!"))