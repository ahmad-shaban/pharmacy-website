import React from 'react'
import './NewArrival.css'
import productInfo from '../../assets/data';
import Slider from '../Slider/Slider';


const NewArrival = () => {
  const images =[]
  productInfo.forEach(product => {
    images.push(product.image);
  });
    
  return (
    <div className='new-arrival'>
      <h1>New Arrival Products</h1>
      <hr />
      <div className='arrival'>

             <Slider images={images} />

      </div>
    </div>
  )
}

export default NewArrival
