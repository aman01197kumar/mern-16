import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    product: {},
    categories: {},

}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

        addProducts: (state, action) => {
            state.products.push(action.payload)
            // state.products = action.payload
        },
        displayProductDetails: (state, action) => {
            state.product = action.payload
        },
        addCategories: (state, action) => {
            state.categories = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { addProducts, displayProductDetails, addCategories } = productSlice.actions

export default productSlice.reducer