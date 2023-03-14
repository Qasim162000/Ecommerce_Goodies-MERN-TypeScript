require("dotenv").config();
const mongoose = require("mongoose");

const localServer = "127.0.0.1:27017";
const database = "ecommerce_goodies";

const mongoURI = process.env.SERVER || `mongodb://${localServer}/${database}`;

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log(`Connected Successfully to ${mongoURI}`);
    })
    .catch((err: string) => {
      console.log(err);
    });
};

export = connectToMongo;
