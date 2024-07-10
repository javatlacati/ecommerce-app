import {createSlice, Slice, SliceSelectors} from "@reduxjs/toolkit";
import {Product} from "../models/Product";

export const productSlice: Slice<Product[], {
    addProduct: (state: any, action: any) => void
}, string, string, SliceSelectors<Product[]>> = createSlice({
    name: 'products',
    initialState: [
        {
            id: 1,
            name: 'Product 1',
        }
    ],
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
