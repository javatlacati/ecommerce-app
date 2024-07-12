import {createSlice, PayloadAction, Slice, SliceSelectors} from "@reduxjs/toolkit";
import {Map} from "immutable";

export interface CartSliceState {
    totalToBePaid: number;
    items: Map<string, number> | null;
}

export const cartSlice: Slice<{ totalToBePaid: number; items: null }, {
    addItem: (state: CartSliceState, action: { payload: any }) => void;
    removeItem: (state: CartSliceState, action: { payload: any }) => void;
    clearCart: (state: CartSliceState) => void
}, string, string, SliceSelectors<{ totalToBePaid: number; items: null }>> = createSlice({
    name: 'cart',
    initialState: {
        items: null,
        totalToBePaid: 0,
    },
    reducers: {
        addItem: (state: CartSliceState, action: { payload: any }) => {
            const productId = action.payload.productId;
            const quantity = action.payload.quantity || 1;
            if (state.items) {
                const currentQuantity = state.items.get(productId);
                if (currentQuantity != undefined) {
                    state.items = state.items.set(productId, currentQuantity + quantity);
                    state.totalToBePaid += quantity * action.payload.price;
                }
            } else {
                state.items = Map({[productId]: quantity});
                state.totalToBePaid += quantity * action.payload.price;
            }
        },
        removeItem: (state: CartSliceState, action: { payload: any }) => {
            const productId: number = action.payload;
            if (state.items != null) {
                const currentQuantity: number = state.items.get(`${productId}`) || 0;
                if (currentQuantity > 0) {
                    state.items.set(`${productId}`, currentQuantity - 1);
                    state.totalToBePaid -= currentQuantity * action.payload.price;
                }
            }
        },
        clearCart: (state: CartSliceState) => {
            state.items = null;
            state.totalToBePaid = 0;
        },
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;