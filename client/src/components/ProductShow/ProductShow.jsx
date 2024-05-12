import React from 'react';
import './ProductShow.css';

const ProductShow = (props) => {
  const { product } = props;
  return (
    <div className="product-show">
      <div className="product-show-left">
        <img src={product.image} alt="" />
      </div>
      <div className="product-show-right">
        <h1>{product.name}</h1>
        <div className="prices">
          <div className="old-price">${product.old_price}</div>
          <div className="new-price">${product.new_price}</div>
        </div>
        <div className="description">
          Introducing {product.name}, your solution for a healthier, happier
          life. Crafted with care and precision to meet your health and wellness
          needs.
        </div>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductShow;
