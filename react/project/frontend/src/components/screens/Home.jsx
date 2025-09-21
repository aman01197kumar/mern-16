import React from 'react'
import { useNavigate } from 'react-router-dom'
import { products } from '../../assets/data'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between p-3'>
      {
        products?.map(({ id, title }) => (
          <p key={id} onClick={() => navigate(`/product-detail/${id}`)}>{title}</p>
        ))
      }
    </div>
  )
}

export default Home