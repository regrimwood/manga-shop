// const { application } = require("express");
// const express = require("express");
// const app = express();
// const port = 3000;
// const products = require("/products");

// app.get("/products", (request, response) => {
//   response.send(products);
// });

// app.listen(port, () => {
//   console.log(`listening at http://localhost:3000`);
// });

// module.exports = app;
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const { getAllProducts, getProductById } = require("./query_functions");

app.use(cors());
app.use(express.json());

app.get("/products", async (request, response) => {
  response.send(await getAllProducts());
});

app.get("/products/:id", async (request, response) => {
  response.send(await getProductById());
});

module.exports = app;
