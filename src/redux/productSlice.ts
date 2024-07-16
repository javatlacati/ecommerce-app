import {createSlice, PayloadAction, Slice, SliceSelectors} from "@reduxjs/toolkit";
import {Product} from "../models/Product";

interface ProductState {
    products: Product[];
}

const initialState: ProductState = {
    products: [],
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state:ProductState, action:PayloadAction<Product>) => {
            state.products = [...state.products, action.payload];
        },
        setProducts: (state: ProductState, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        }
        // removeProduct: (state, action) => {
        //     state = state.filter((product) => product.id!== action.payload);
        // },
    },
})

export const {addProduct,setProducts} = productSlice.actions;
export default productSlice.reducer;
