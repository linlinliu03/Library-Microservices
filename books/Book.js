const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },
     
    numberPages: {
        type: Number,
        required: false
    },

    publisher: {
        type: String,
        required: false
    }
})

module.exports = Book = mongoose.model("books", BookSchema);