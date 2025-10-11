import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts, displayProductDetails } from '../../redux/products'
import { useNavigate } from 'react-router-dom'

const Card = ({ id, title, images, price, description, setProduct }) => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.productSlice)
    const navigate = useNavigate()

    const addedToCart = products.some(item => item.title === title)

    const showProductDetails = () => {

        dispatch(displayProductDetails({
            id: id,
            title: title,
            image: images[0],
            price: price,
            description: description
        }))
        navigate(`/product-detail/${id}`)
    }
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

            <img className="rounded-t-lg" src={images[0]} alt="" />

            <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
                <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                    Rs. {price}
                </p>

                <div className='flex justify-between'>

                    <button
                        type="button"
                        disabled={addedToCart}
                        className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ${addedToCart ? "bg-gray-700" : "bg-blue-700"} rounded-lg ${!addedToCart ? "bg-blue-700" : null} focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                        onClick={() => dispatch(addProducts({ id: id, title: title, image: images[0], price: price }))}
                    >
                        {addedToCart ? 'Added to Cart' : 'Add to Cart'}
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </button>
                    <div
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={showProductDetails}
                    >
                        Product Detail
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card