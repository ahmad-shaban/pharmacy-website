import React from 'react'
import './Popular.css'
import Item from '../Item/Item'
import allProducts from './../../assets/allProducts';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>BEST PRODUCTS SELECTED FOR YOU</h1>
      <hr />
        <div className="popular-item">
            {allProducts.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} 
                image={item.image} old_price={item.old_price} new_price={item.new_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular
