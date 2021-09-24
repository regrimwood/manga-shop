const { application } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.get("/products", (request, response) => {
  response.send({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`listening at http://localhost:3000`);
});

module.exports = app;
