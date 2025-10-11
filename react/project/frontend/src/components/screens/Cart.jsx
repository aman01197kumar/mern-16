import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../utilities/Header';

const Cart = () => {
  const {product} = useSelector(state=>state.productSlice)

  console.log(product,'product');
  
  return (
    <div>
      <Header/>
      {products?.map(item=>(
        <div>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default Cart