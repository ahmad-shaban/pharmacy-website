import React from 'react';
import offer from '../../assets/offer.svg'
import './Offers.css'

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>For a limited time</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={offer} alt="" />
      </div>
    </div>
  );
};

export default Offers;
