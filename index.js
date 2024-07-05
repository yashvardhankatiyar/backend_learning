require("dotenv").config();
const mongoose = require("mongoose");
const { Schema } = mongoose;
const express = require("express");
const fs = require("fs");
const server = express();
const productRouter = require("./Routes/Products");

//db connection
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(`mongodb+srv://yashvardhan:${process.env.DB_PASSWORD}@cluster0.m4lyy2f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
  console.log("Database connected");
}

//schema

server.use(express.json()); //bodyparser
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/products", productRouter.router);

server.listen(process.env.PORT, () => {
  console.log("server is running on port 8080");
});
