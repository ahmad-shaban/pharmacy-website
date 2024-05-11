import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import './CSS/Category.css';
import Item from '../components/Item/Item';

const Category = (props) => {
  const { allProducts } = useContext(ShopContext);
  return (
    <div className="category">
      <div className="products">
        {allProducts.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            );
          } else return null;
        })}
      </div>
    </div>
  );
};

export default Category;
