// Here we're creating our User Schema, specifying the type of data
const mongoose = require("mongoose");
// Bcrypt will be used to encrypt all the passwords
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, index:{unique:true} },
    password: { type: String, required:true },
    list: [{ type: Schema.Types.ObjectId, ref: "List" }]
    // wallet: { type: Number, default: 10000 },
    // budget: [{ type: Schema.Types.ObjectId, ref: "Budget" }],
    // special: [{ type: Schema.Types.ObjectId, ref: "Special" }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;