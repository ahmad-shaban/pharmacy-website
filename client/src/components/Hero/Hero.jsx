import React from 'react';
import './Hero.css';
import discount from '../../assets/discount (1).svg';
import heroImage from '../../assets/sale.svg'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
          <div className='hero-cart'>
            <img src={discount} alt="" />
          </div>
          <p>for ALL</p>
          <p>categories</p>
        </div>
        <div className='hero-latest-arrival'>
            <button>Latest Arrival</button>
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
