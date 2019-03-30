// Here we're creating our User Schema, specifying the type of data
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: { type: String, required: true },
    items: [{ type: Schema.Types.ObjectId, ref: "Item" }]
});

const List = mongoose.model("List", listSchema);

module.exports = List;