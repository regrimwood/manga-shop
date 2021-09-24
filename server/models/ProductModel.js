const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  // ==========
  title: { type: String, required: true },
  title: { type: String, required: true },
  title: { type: String, required: true },
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
