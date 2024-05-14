import React, {useEffect, useState} from 'react'
import './Popular.css'
import Item from '../Item/Item'
import axios from 'axios';


const Popular = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products/').then((res) => {
      setAllProducts(res.data);
    } ).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className='popular'>
      <h1>BEST PRODUCTS SELECTED FOR YOU</h1>
      <hr />
        <div className="popular-item">
            {allProducts.map((item,i)=>{
                return <Item key={i} id={item._id} name={item.name} 
                image={item.image} old_price={item.old_price} new_price={item.new_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular
