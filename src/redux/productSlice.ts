import {createSlice} from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            // if(action.payload)
            //     state.push(action.payload);
        },
        // removeProduct: (state, action) => {
        //     state = state.filter((product) => product.id!== action.payload);
        // },
    },
})

export const {addProduct} = productSlice.actions;
export default productSlice.reducer;