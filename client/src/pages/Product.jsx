import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import ProductShow from './../components/ProductShow/ProductShow';

const Product = () => {
  let product;
  const {productId} = useParams();

  axios.get('/api/products/' + productId).then((res) => {
    product = res.data;
  }).catch((err) => {
    console.log(err);
  });

  return (
    <div >
      <Breadcrum product = {product}/>
      <ProductShow product = {product}/>
    </div>
  )
}

export default Product
