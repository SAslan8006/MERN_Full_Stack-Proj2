const RoomSchema = require('../models/Room.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const createRoom = async (req, res) => {
  try {
    const newRoom = await RoomSchema.create(req.body);
    res.status(201).json(newRoom);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const allRoom = async (req, res) => {
  try {
    const getRooms = await RoomSchema.find();
    res.status(200).json( getRooms );
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const detailRoom = async (req, res) => {
  try {

    const detail = await RoomSchema.findById(req.params.id);
    res.status(200).json(detail);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
module.exports = { createRoom, allRoom, detailRoom };
