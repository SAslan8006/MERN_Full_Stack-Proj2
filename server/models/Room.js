const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  }
},{timestamps:true});

module.exports = mongoose.model("room", RoomSchema);