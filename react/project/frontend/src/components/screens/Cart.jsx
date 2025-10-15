import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Trash2, Plus, Minus } from "lucide-react";
import Header from "../utilities/Header";
import NotFound from "../utilities/NotFound";
import { addProducts, deleteProduct, minusProduct } from "../../redux/products";

const Cart = () => {
  const { products } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();

  const increaseQty = (id) => {
    const product = products.find(item => item.id === id)
    dispatch(addProducts(product))

  };

  const decreaseQty = (id) => {
    const product = products.find(item => item.id === id)
    dispatch(minusProduct(product))
  };

  const totalPrice = products.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <>
      <Header />
      {
        products?.length > 0 ? (

          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4 sm:px-10">
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                Your Shopping Cart
              </h2>

              {/* Cart Items */}
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {products.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row justify-between items-center py-5"
                  >
                    {/* Product Info */}
                    <div className="flex items-center gap-5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 object-cover rounded-lg border border-gray-300"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          ₹{item.price}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3 sm:mt-0">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-gray-800 dark:text-white">{item.count}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                      >
                        <Plus size={14} />
                      </button>

                      {/* Remove Button */}
                      <button

                        className="ml-4 text-red-600 hover:text-red-700 transition" onClick={() => dispatch(deleteProduct(item.id))}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Section */}
              <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-6">
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  Total: <span className="text-blue-600 dark:text-blue-400">₹{totalPrice.toFixed(2)}</span>
                </p>

                <button className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        ) : <NotFound />
      }
    </>
  );
};

export default Cart;
