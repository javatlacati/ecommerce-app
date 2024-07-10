import {createSlice, PayloadAction, Slice, SliceSelectors} from "@reduxjs/toolkit";

export const cartSlice: Slice<{ totalToBePaid: number; items: Map<number, number> }, {
    addItem: (state: any, action: any) => void
}, string, string, SliceSelectors<{ totalToBePaid: number; items: Map<number, number> }>> = createSlice({
    name: 'cart',
    initialState: {
        items: new Map(),
        totalToBePaid: 0,
    },
    reducers: {
        addItem: (state, action) => {

        },
        //     removeItem: (state, action) => {
        //
        //     },
    }
});

export const {addItem,} = cartSlice.actions;

export default cartSlice.reducer;