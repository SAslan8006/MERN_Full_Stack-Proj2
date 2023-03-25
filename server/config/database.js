const mongoose = require("mongoose");

const database = () => {
  mongoose
    .connect(process.env.DB_URI, {
      dbName: "Mern2",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to the DB succesully");
    })
    .catch((err) => {
      console.log(`DB connection err:, ${err}`);
    });
};

module.exports = database;
