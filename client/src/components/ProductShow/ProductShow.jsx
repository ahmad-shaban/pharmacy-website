import React, { useContext } from 'react';
import './ProductShow.css';
import { ShopContext } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductShow = (props) => {
  const Navigate = useNavigate();
  const { product } = props;
  const {addToCart } = useContext(ShopContext)
  
  const handleDelete = (productId) => {
		axios
			.delete("/api/products/" + productId)
			.then((res) => {
				console.log(res.data);
        Navigate("/");
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	};

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
          {product.description}
        </div>
        <div className='product-buttons'>
        {document.cookie.slice(0, 3) === "jwt" ?
        <button onClick={()=>{addToCart(product._id)}}>ADD TO CART</button> :
        <button onClick={()=>{Navigate("/login")}}>Login To Purchase</button>}
        {localStorage.getItem("role") === "Admin" ?
        <button onClick={()=>handleDelete(product._id)}>DELETE PRODUCT</button> :null}
        </div>
      </div>
    </div>
  );
};

export default ProductShow;
