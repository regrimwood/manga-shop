const Product = ({ title, img, description, price, rating }) => {
  return (
    <li className="product-grid-item">
      <img className="product-img" src={img} alt={title} />
      <div className="product-text">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <p className="price">{price}</p>
        <p className="rating">{rating}</p>
      </div>
    </li>
  );
};

export default Product;
