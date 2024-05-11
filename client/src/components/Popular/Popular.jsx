import React from 'react'
import './Popular.css'
import productInfo from '../../assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR PRODUCTS SELECTED FOR YOU</h1>
      <hr />
        <div className="popular-item">
            {productInfo.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} 
                image={item.image} old_price={item.old_price} new_price={item.new_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular
