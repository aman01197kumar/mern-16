import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    product:{}
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

        addProducts: (state, action) => {
            state.products.push(action.payload)
        },
        displayProductDetails:(state,action)=>{
            state.product = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { addProducts,displayProductDetails } = productSlice.actions

export default productSlice.reducer