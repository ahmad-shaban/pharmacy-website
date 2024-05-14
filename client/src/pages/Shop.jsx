import React from 'react'
import Hero from './../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import NewArrival from '../components/NewArrival/NewArrival';

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      {/* <Offers/> */}
      <NewArrival/>
      {/* <NewsLetter/> */}
    </div>
  )
}

export default Shop
