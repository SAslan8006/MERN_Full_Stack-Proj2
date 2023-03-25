const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const database = require('./config/database');
const roomRouter = require('./routes/Room.js');
const messageRouter = require('./routes/Message.js');
const Pusher = require("pusher");
const mongoose =require('mongoose');

const pusher = new Pusher({
    appId: "1573534",
    key: "6c59fb91c4b5d2ec4f2d",
    secret: "4c8deef92c26a74a30df",
    cluster: "eu",
    useTLS: true
});
dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
// Router Register
app.use('/', roomRouter);
app.use('/', messageRouter);

database();

const db = mongoose.connection;

db.once('open', () => {
    const roomCollection = db.collection('rooms');
    const changeStream = roomCollection.watch();

    changeStream.on('change', (change) => {
        if (change.operationType === 'insert') {
            const roomDetails = change.fullDocument;
            pusher.trigger('rooms', 'inserted', roomDetails);
        } else {
            console.log("Trigger oyun gerçekleşmedi...");
        }
    })
    const msgCollection = db.collection('messages');
    const changeStream1 = msgCollection.watch();

    changeStream1.on('change', (change) => {
        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('message', 'inserted', messageDetails);
        } else {
            console.log("Trigger oyun gerçekleşmedi...");
        }
    });
})

app.get('/', (req, res) => {
    res.json({ message: 'deneme deneme' });
});



app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
