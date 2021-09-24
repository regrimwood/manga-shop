const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  isbn: { type: Number, required: true },
  price: { type: String, required: true },
  rating: { type: String, required: true },
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
