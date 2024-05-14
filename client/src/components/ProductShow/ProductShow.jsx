import React, { useContext } from 'react';
import './ProductShow.css';
import { ShopContext } from '../../context/ShopContext';

const ProductShow = (props) => {
  const { product } = props;
  const {addToCart } = useContext(ShopContext)
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
          your solution for a healthier, happier
          life. Crafted with care and precision to meet your health and wellness
          needs.
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductShow;
