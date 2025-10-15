import React from 'react'

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="text-center">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
                    alt="Empty Cart"
                    className="w-32 mx-auto mb-4 opacity-70"
                />
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                    Your cart is empty 😕
                </h2>
                <p className="text-gray-500 mt-2">
                    Add products to your cart to see them here.
                </p>
            </div>
        </div>
    );
}

export default NotFound