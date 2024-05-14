import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ShopContext = createContext(null);



const ShopContextProvider = (props) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products/').then((res) => {
      setAllProducts(res.data);
    } ).catch((err) => {
      console.log(err);
    });
  }, []);


  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (cartItems[itemId] === undefined) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
      return;
    }
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
          (product) => product._id === item
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
