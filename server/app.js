const express = require("express");
const cors = require("cors");
const app = express();
const { getAllProducts, getProductById } = require("./query_functions");

app.use(cors());
app.use(express.json());

app.get("/products", async (request, response) => {
  const allProducts = await getAllProducts();

  const products = allProducts.map(
    ({ _id: id, title, description, img, isbn, price, rating }) => ({
      id,
      title,
      description,
      img,
      isbn,
      price,
      rating,
    }),
  );

  response.send(products);
});

app.get("/products/:id", async (request, response) => {
  const {
    _id: id,
    title,
    description,
    img,
    isbn,
    price,
    rating,
  } = await getProductById(request.params.id);

  const product = { id, title, description, img, isbn, price, rating };

  response.send(product);
});

module.exports = app;
