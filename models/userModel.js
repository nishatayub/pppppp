const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    DOB: {
        type: Date
    }
});

module.exports = mongoose.model("User", userSchema);