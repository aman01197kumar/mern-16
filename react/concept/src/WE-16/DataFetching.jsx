import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DataFetching = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await axios.get('https://dummyjson.com/products')
        console.log(response?.data?.products);
        setData(response?.data?.products)
    }
    console.log('data', data);

    useEffect(() => { fetchData() }, [])
    return (
        <div>
            {
                data?.map(item => (
                    <p>{item.title}</p>
                ))
            }
        </div>
    )
}

export default DataFetching