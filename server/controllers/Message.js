const messageShema = require('../models/Message.js');


const createMessage = async (req, res) => {
    try {
        const newMessage = await messageShema.create(req.body);
        res.status(201).json(newMessage);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

const detailMessage = async (req, res) => {
    try {
        const detailMessage = await messageShema.find({roomId:req.params.id});
        res.status(200).json(detailMessage);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};
module.exports = { createMessage, detailMessage };
