import {createSlice, Slice, SliceSelectors} from "@reduxjs/toolkit";
import {Product} from "../models/Product";

export const productSlice: Slice<Product[], {
    addProduct: (state: any, action: any) => void
}, string, string, SliceSelectors<Product[]>> = createSlice({
    name: 'products',
    initialState: [
        {
            id: 1,
            name: 'Gorra café',
            price: 10.99,
            image: 'FOTOSURBAN-28.JPG',
            description: 'Description 1',
        },
        {
            id: 2,
            name: 'Gorra rosa',
            price: 7.24,
            image: 'FOTOSURBAN-29.JPG',
            description: 'Description 2',
        },
        {
            id: 3,
            name: 'Gorra negra logo gris',
            price: 7.24,
            image: 'FOTOSURBAN-31.JPG',
            description: 'Description 2',
        },
        {
            id: 4,
            name: 'Gorra negra logo rojo',
            price: 7.24,
            image: 'FOTOSURBAN-34.JPG',
            description: 'Description 2',
        }
    ],
    reducers: {
        addProduct: (state, action) => {

        },
        // removeProduct: (state, action) => {
        //     state = state.filter((product) => product.id!== action.payload);
        // },
    },
})

export const {addProduct} = productSlice.actions;
export default productSlice.reducer;
