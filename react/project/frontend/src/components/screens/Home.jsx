import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../utilities/Header'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addCategories } from '../../redux/products'

const Home = () => {
  const [data, setData] = useState([])
  // const [product, setProduct] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const fetchData = async () => {
    const response = await axios.get('https://dummyjson.com/products')
    // console.log(response?.data?.products, 'response');
    const categories = response?.data?.products
    // const categorizedProducts = {};

    // for (let item of categories) {
    //   const category = item.category;

    //   // If category doesn't exist yet, create a new array
    //   if (!categorizedProducts[category]) {
    //     categorizedProducts[category] = [];
    //   }

    //   // Push the item into the corresponding category
    //   categorizedProducts[category].push(item);
    // }
    const categorized = categories.reduce((acc, item) => {
      (acc[item.category] = acc[item.category] || []).push(item);
      return acc;
    }, {});

    setData(categorized)
    dispatch(addCategories(categorized))
  }

  useEffect(() => { fetchData() }, [])

  const onClickHandler = (data, category) => {
    // dispatch(addProducts(data))
    navigate(`/products/${category}`)
  }

  return (
    <>
      <Header />
      <div className='p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {

          Object.keys(data).map(category => (
            <div key={category} className='p-4 border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center flex-col cursor-pointer'
              onClick={() => onClickHandler(data[category], category)}
            >
              <img
                src={data[category][0].images[0]}
                alt={`${category} category`}
                className='w-full h-48 object-cover'
              />
              <h2 className='text-xl font-bold capitalize mt-4'>{category}</h2>

            </div>
          ))
        }

      </div>
    </>
  )
}

export default Home