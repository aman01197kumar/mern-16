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
            const existingProduct = state.products.find(item => item.id === action.payload.id);
            if (existingProduct) {
                existingProduct.count += 1;
            } else {
                state.products.push({ ...action.payload, count: 1 });
            }
        },
        minusProduct: (state, action) => {
            const existingProduct = state.products.find(item => item.id === action.payload.id)
            if (existingProduct) {

                if (existingProduct.count > 1)
                    existingProduct.count -= 1
                else
                    state.products = state.products.filter(item => item.id !== action.payload.id)
            }

        },
        displayProductDetails: (state, action) => {
            state.product = action.payload
        },
        addCategories: (state, action) => {
            state.categories = action.payload
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addProducts, displayProductDetails, addCategories, deleteProduct, minusProduct } = productSlice.actions

export default productSlice.reducer