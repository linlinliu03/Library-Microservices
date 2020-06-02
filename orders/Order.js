const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    CustomerID: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },

    BookID: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },

    initialData: {
        type: Date,
        required: true
    },

    deliveryDate: {
        type: Date,
        required: true
    }
})

module.exports = Order = mongoose.model("orders", OrderSchema);