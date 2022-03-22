const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Enter a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Enter an email"],
        unique: true,
    },
    firstName: {
        type: String,
        required: [true, "Enter a firstName"],
    },
    lastName: {
        type: String,
        required: [true, "Enter a lastName"],
    },
    password: {
        type: String,
        required: [true, "Enter a password"],
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;