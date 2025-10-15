import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts, displayProductDetails } from '../../redux/products';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

const Card = ({
    id,
    availabilityStatus,
    title,
    brand,
    category,
    description,
    dimensions,
    images,
    price,
    rating,
    reviews,
    tags
}) => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.productSlice);

    const navigate = useNavigate();

    const addedToCart = products.some(item => item.id === id);

    const showProductDetails = (id,
        title,
        images,
        price,
        availabilityStatus,
        brand,
        category,
        description,
        dimensions,
        rating,
        reviews,
        tags) => {
        dispatch(displayProductDetails({
            id: id,
            title: title,
            images: images,
            price: price,
            availabilityStatus: availabilityStatus,
            brand: brand,
            category: category,
            description: description,
            dimensions: dimensions,
            rating: rating,
            reviews: reviews,
            tags: tags
        }));
        navigate(`/product-details/${title}`);
    };

    return (

        <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105 dark:bg-gray-800 dark:border-gray-700 border border-gray-200">

            {/* Image */}
            <div className="relative">
                <img className="w-full h-52 object-cover rounded-t-2xl" src={images?.[0]} alt={title} />
                {availabilityStatus?.toLowerCase() !== 'in stock' && (
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-md">
                        Out of Stock
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                    {title}
                </h5>

                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {description}
                </p>

                {/* Price & Rating */}
                <div className="flex justify-between items-center mt-1">
                    <span className="text-xl font-bold text-gray-800 dark:text-gray-100">₹{price}</span>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={16}
                                className={`${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-4">
                    <button

                        type="button"
                        disabled={addedToCart}
                        onClick={() =>
                            dispatch(addProducts({ id: id, title: title, image: images[0], price }))
                        }
                        className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-200 ${addedToCart
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                            }`}
                    >
                        {addedToCart ? 'Added' : 'Add to Cart'}
                    </button>

                    <button
                        onClick={() => showProductDetails(id,
                            title,
                            images,
                            price,
                            availabilityStatus,
                            brand,
                            category,
                            description,
                            dimensions,
                            rating,
                            reviews,
                            tags)}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg flex items-center gap-2 transition-colors duration-200"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
