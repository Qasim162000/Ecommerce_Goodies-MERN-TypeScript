require("dotenv").config();
const express = require("express");
const connectToMongo = require("./db");

connectToMongo();
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Ecommerce_Goodies Backend listening on port ${port}`);
});
