const mongoose = require('mongoose');


const itemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

const items = mongoose.model("items", itemsSchema);

module.exports = items;