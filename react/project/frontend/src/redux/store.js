import { configureStore } from '@reduxjs/toolkit'
import productReducer from './products'

export const store = configureStore({
    reducer: {
        productSlice: productReducer,
    },
})