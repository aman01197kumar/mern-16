import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../assets/data'

const ProductDetails = () => {
  const param = useParams()
  const { id } = param
  console.log(id, 'params');
  return (
    <div>{products[id - 1].title}</div>
  )
}

export default ProductDetails