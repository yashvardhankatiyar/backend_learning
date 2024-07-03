const express = require("express");
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const server = express();

server.use(express.json());

// Custom middleware to takecare of entry
// server.use((req, res, next) => {
//   console.log(
//     req.get("User-Agent"),
//     req.method,
//     req.ip,
//     req.hostname,
//     new Date()
//   );
//   next();
// });


// const auth = ((req, res, next) => {
//   console.log(req.body);

//   if (req.body.password == "123") {
//     next();
//   } else {
//     res.sendStatus(401);
//   }
// });

// server.use(auth);


//GET
server.get("/products/:id", (req, res) => {
  console.log(req.params)
  res.json({ type: "GET" });
});

//POST
server.post("/", (req, res) => {
  res.json({ type: "POST" });
});

//PUT
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});

//DELETE
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

//PATCH
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.listen(8080);
