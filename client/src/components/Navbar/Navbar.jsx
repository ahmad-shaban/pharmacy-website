import React, { useContext, useState } from 'react';
import logo from '../../assets/medicine (1).svg';
import cart from '../../assets/cart.svg';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    if (document.cookie.slice(0, 3) !== "jwt") {
      navigate("/login");
      return;
    }
    axios.post("/api/users/logout").then(() => {
      localStorage.removeItem("role");
      navigate("/");
    });
  };

  const[menu,setMenu] = useState("drugs");
  const {getTotalCartItems}= useContext(ShopContext);
  // function toggleMenu() {
  //   const nav = document.querySelector('nav-menu');
  //   nav.classList.toggle('show');//classList.toggle('show');
  // }
    const [isActive, setIsActive] = useState(false);
  
    const toggleClass = () => {
      setIsActive(!isActive);
    };
  
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <Link to='/' style={{textDecoration:'none'}}><p>Pharmacy website</p></Link>
      </div>
      <ul className={`nav-menu ${isActive ? 'active' : ''}`} >
        <li onClick={()=>{setMenu("drugs")}}><Link to='/drugs'>drugs</Link> {menu==="drugs"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("skin-care")}}><Link to='/skin-care'>skin care</Link>{menu==="skin-care"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("baby-care")}}><Link to='/baby-care'>baby care</Link> {menu==="baby-care"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("home-care")}}><Link to='/home-care'>home care</Link> {menu==="home-care"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men-care")}}><Link to='/men-care'>men care</Link> {menu==="men-care"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women-care")}}><Link to='/women-care'>women care</Link> {menu==="women-care"?<hr/>:<></>}</li>
      </ul>
      <div className="menu-btn" onClick={toggleClass} >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      <div className="login-cart">
        <button onClick={handleLogout}>{document.cookie.slice(0, 3) === "jwt" ? "Logout" : "Login / Signup"}</button>
        {
          localStorage.getItem("role") === "Admin" ?
          <Link to="/admin"><button>Add Product</button></Link> : null
        }
        {
          document.cookie.slice(0, 3) === "jwt" ? (<>
          <Link to="/cart"><img src={cart} alt="" /></Link>
          <div className="cart-count">{getTotalCartItems()}</div>
          </>) : null
        }
      </div>
    </div>
  );
};

export default Navbar;
