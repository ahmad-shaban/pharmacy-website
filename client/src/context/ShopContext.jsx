import React, { createContext, useState } from 'react';
import allProducts from '../assets/allProducts';

export const ShopContext = createContext(null);

const CreateEmptyCart = () => {
  let cart = {};
  for (let index = 0; index < allProducts.length + 1; index++) cart[index] = 0;
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(CreateEmptyCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  console.log(cartItems);

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) 
    {
      if (cartItems[item] > 0) {
        let itemInfo = allProducts.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };
const getTotalCartItems = ()=>{
    let totalItems = 0;
    for (const item in cartItems)
        {
            if(cartItems[item]>0)
                {
                    totalItems +=cartItems[item];
                }
        }
        return totalItems
}

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
