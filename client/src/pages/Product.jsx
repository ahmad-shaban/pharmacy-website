import React, { useContext } from 'react'
import { ShopContext } from './../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import ProductShow from './../components/ProductShow/ProductShow';

const Product = () => {
  const {allProducts} = useContext(ShopContext);
  const {productId} = useParams()
  const product = allProducts.find((e)=>e.id===Number(productId))
  return (
    <div >
      <Breadcrum product = {product}/>
      <ProductShow product={product}/>
    </div>
  )
}

export default Product
