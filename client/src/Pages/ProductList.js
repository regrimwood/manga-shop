import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Comics for sale</h1>
      <ProductList products={products} />
    </>
  );
};

export default ProductListing;
