import React from 'react'
import './NewArrival.css'
import Item from '../Item/Item'
import productInfo from '../../assets/data';

const NewArrival = () => {
  return (
    <div className='new-arrival'>
      <h1>New Arrival Products</h1>
      <hr />
      <div className='arrival'>

        {productInfo.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name}
             image={item.image} old_price={item.old_price} new_price={item.new_price} />})}

      </div>
    </div>
  )
}

export default NewArrival
