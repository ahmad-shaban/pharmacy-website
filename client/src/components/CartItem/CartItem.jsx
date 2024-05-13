import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../../assets/cart_cross_icon.png';

const CartItem = () => {
  const { getTotalCartAmount,allProducts, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cart-items">
      <div className="cart-format">
        <p>Products</p>
        <p>Titles</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProducts.map((e) => {
        if (cartItems[e.id]> 0) {
          return<div>
              <div className="cart-item-format cart-format">
                <img src={e.image} alt="" className="product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart-item-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='remove-icon'
                  src={remove_icon}
                  alt=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
        }
        return null;
      })}
      <div className="cart-bottom">
        <div className="cart-totals">
            <h1>cart Totals</h1>
            <div>
                <div className="cart-total-item">
                  <p>Subtotal</p> 
                  <p>${getTotalCartAmount()}</p> 
                </div>
                <hr />
                <div className="cart-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cart-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
