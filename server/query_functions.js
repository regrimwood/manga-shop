const ProductModel = require("./models/ProductModel");

const getAllProducts = async () => {
  return await ProductModel.find({});
};

const getProudctById = async (id) => {
  return await ProductModel.findById(id);
};
