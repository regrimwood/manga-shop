import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <ul className="product-list">
      {products.map((product) => {
        return (
          <li key={product.id} className="property-list-item">
            <Product
              img={product.img}
              title={product.title}
              description={product.description}
              price={product.price}
              rating={product.rating}
              linkToProduct={product.id}
              headingLevel="h2"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
