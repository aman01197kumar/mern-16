import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { products } from '../../assets/data'
import Header from '../utilities/Header'
import axios from 'axios'
import Card from '../utilities/Card'

const Home = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  const fetchData = async () => {
    const response = await axios.get('https://dummyjson.com/products')
    // console.log(response?.data?.products, 'response');
    setData(response?.data?.products)
  }

  useEffect(() => { fetchData() }, [])
  return (
    <>
      <Header />
      <div className='grid md:grid-cols-3 gap-5'>
        {
          data?.map(({ id, title, images, price, description }) => (
            <Card images={images} title={title} price={price} description={description} id={id} />
          ))
        }
      </div>
    </>
  )
}

export default Home