import React from 'react';
import './Hero.css';
import discount from '../../assets/discount (1).svg';
import heroImage from '../../assets/sale.svg';

const scrollToPosition = (targetX, targetY) => {
  window.scrollTo({
    top: targetY,
    left: targetX,
    behavior: 'smooth',
  });
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
          <div className="hero-cart">
            <img src={discount} alt="" />
          </div>
          <p>for ALL</p>
          <p>categories</p>
        </div>
        <div className="hero-latest-arrival">
          <button
            onClick={() =>
              window.scrollTo({
                top: 5050,
                left: 0,
                behavior: 'smooth',
              })
            }
          >
            Latest Arrival
          </button>
        </div>
      </div>
      <div className="hero-right">
        <div class="introduction-text">
          <h1>
            <span>Welcome</span> to our pharmacy
          </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
