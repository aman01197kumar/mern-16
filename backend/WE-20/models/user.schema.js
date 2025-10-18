const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    contact: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
    },

})

const USER = mongoose.model("USER", userSchema)

module.exports = USER