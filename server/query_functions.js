const ProductModel = require("./models/ProductModel");

const getAllProducts = async () => {
  return await ProductModel.find({});
};

const getProductById = async (id) => {
  const result = await ProductModel.findById(id);
  console.log("🌸", result);
  return result;
};

module.exports = { getAllProducts, getProductById };
