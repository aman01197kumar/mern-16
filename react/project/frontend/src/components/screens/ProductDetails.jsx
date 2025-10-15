import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "../../redux/products";
import { Star } from "lucide-react";
import Header from "../utilities/Header";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const params = useParams()
  const { product } = useSelector((state) => state.productSlice);
  const {products} = useSelector(state=>state.productSlice)


  const addedToCart = products.some(item=>item.title===params.title); // You can implement cart check logic

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col lg:flex-row gap-10">

        {/* Left: Product Images */}
        <div className="flex-1">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-96 object-cover rounded-2xl border border-gray-200 dark:border-gray-700"
            />
          {/* Thumbnails can be added here */}
        </div>

        {/* Right: Product Info */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {product.title}
          </h1>
            <p>{product.brand}</p>

          <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            ₹{product.price}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
              key={i}
              size={18}
              className={`${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
              />
            ))}
            {/* <span className="text-gray-600 dark:text-gray-400">
              ({product.reviews} reviews)
              </span> */}
          </div>

          {/* Stock Status */}
          <p
            className={`font-medium ${product.availabilityStatus === "In Stock"
              ? "text-green-600"
              : "text-red-500"
            }`}
            >
            {product.availabilityStatus}
          </p>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 mt-4">{product.description}</p>

          {/* Brand, Category, Dimensions */}
          <div className="mt-4 space-y-1 text-gray-600 dark:text-gray-400 text-sm">
            <p><span className="font-semibold">Category:</span> {product.category}</p>
            {product.dimensions && (
              <p><span className="font-semibold">Dimensions:</span> {`${product.dimensions.width}`} x {`${product.dimensions.height}`} x {`${product.dimensions.depth}`}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() =>
                dispatch(addProducts({
                  id: product.id,
                  title: product.title,
                  image: product.images[0],
                  price: product.price
                }))
              }
              className={`px-6 py-3 rounded-lg font-medium text-white transition ${addedToCart ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                }`}
                disabled={addedToCart}
                >
              {addedToCart ? "Added to Cart" : "Add to Cart"}
            </button>

            <button className="px-6 py-3 rounded-lg font-medium text-white bg-green-600 hover:bg-green-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
              </>
  );
};

export default ProductDetails;
