import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../assets/data'
import { useSelector } from 'react-redux'

const ProductDetails = () => {
  const param = useParams()
  const {product} = useSelector(state=>state.productSlice)
  console.log(product,'products');
  const { id } = param
  console.log(id, 'params');
  return (
    <div>{product.title}</div>
  )
}

export default ProductDetails