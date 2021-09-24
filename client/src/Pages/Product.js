import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/products/${id}`);

      if (response.status === 404) {
        setIsNotFound(true);
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      setProduct(data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isNotFound) {
    return (
      <>
        <p className="error">Sorry! We can't find that product</p>
        <Link to="/" className="btn">
          &larr; Back to listings
        </Link>
      </>
    );
  }

  return (
    <>
      <Product
        title={product.title}
        isbn={product.isbn}
        rating={product.rating}
        img={product.img}
        price={product.price}
        description={product.description}
        id={product.id}
        headingLevel="h1"
      />
      <Link to="/" className="btn">
        &larr; Back to listings
      </Link>
    </>
  );
};

export default ProductListing;
