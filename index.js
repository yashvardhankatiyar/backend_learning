require('dotenv').config();
const express = require("express");
const fs = require("fs");
const server = express();
server.use(express.json());//bodyparser
const productRouter = require("./Routes/Products")
server.use(express.static(process.env.PUBLIC_DIR));

server.use("/products", productRouter.router)

server.listen(process.env.PORT, () => {
  console.log("server is running on port 8080");
});
