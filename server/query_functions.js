const ProductModel = require("./models/ProductModel");

const getAllProducts = async () => {
  return await ProductModel.find({});
};

const getProductById = async (id) => {
  return await ProductModel.findById(id);
};

module.exports = { getAllProducts, getProductById };
