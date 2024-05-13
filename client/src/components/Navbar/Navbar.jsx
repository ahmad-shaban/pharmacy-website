import React, { useState } from 'react';
import logo from '../../assets/medicine (1).svg';
import cart from '../../assets/cart.svg';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const[menu,setMenu] = useState("drugs");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <Link to='/' style={{textDecoration:'none'}}><p>Pharmacy website</p></Link>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("drugs")}}><Link to='/drugs'>drugs</Link> {menu==="drugs"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("skin-care")}}><Link to='/skin-care'>skin care</Link>{menu==="skin-care"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("baby-care")}}><Link to='/baby-care'>baby care</Link> {menu==="baby-care"?<hr/>:<></>}</li>
      </ul>
      <div className="login-cart">
        <Link to="/login"><button>Login/Signup</button></Link>
        <Link to="/cart"><img src={cart} alt="" /></Link>
        <div className="cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
