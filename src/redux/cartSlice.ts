import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
    },
    reducers: {
        addItem: (state, action) => {
            // const existingItem = state.items.find(item => item.id === action.payload.id);
            // if (existingItem) {
            //     existingItem.quantity++;
            // } else {
            //     state.items.push({...action.payload, quantity: 1});
            // }
            // state.total += action.payload.price;
        },
        //     removeItem: (state, action) => {
        //         const index = state.items.findIndex(item => item.id === action.payload.id);
        //         if (index >= 0) {
        //             state.items.splice(index, 1);
        //             state.total -= action.payload.price;
        //         }
        //     },
    }
});

export const {addItem,} = cartSlice.actions;

export default cartSlice.reducer;