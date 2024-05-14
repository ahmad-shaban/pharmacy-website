import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import ProductShow from './../components/ProductShow/ProductShow';

const Product = () => {
  const [product, setProducts] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    axios.get('/api/products/' + productId).then((res) => {
      setProducts(res.data);
    } ).catch((err) => {
      console.log(err);
    });
  }, [productId]);

  return (
    <div >
      <Breadcrum product = {product}/>
      <ProductShow product = {product}/>
    </div>
  )
}

export default Product
