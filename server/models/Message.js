const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    message: {
        type: String,
        require: true,
        trim: true,
    },
    uid: {
        type: String,
        require: true,
        trim: true,
    },
    roomId: {
        type: String,
        require: true,
        trim: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("message", messageSchema);