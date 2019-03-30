// Here we're creating our User Schema, specifying the type of data
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, default: 0 },
    checked: { type: Boolean, default: false}
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;