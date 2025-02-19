import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CartProduct {
    productId: number;
    productQuantity: number;
    productPrice: number;
}

export interface CartSliceState {
    totalToBePaid: number;
    items: CartProduct[];
}

let addItemFunction = (state: CartSliceState, action: PayloadAction<{
    productId: number,
    quantity: number,
    price: number
}>) => {
    const productId = action.payload.productId;
    const quantity = action.payload.quantity || 1;
    let price = action.payload.price;
    let possibleItemIndex = state.items.findIndex((item) =>
        item.productId === productId
    );
    if (possibleItemIndex !== -1) {
        const possibleItem = state.items[possibleItemIndex];
        const currentQuantity = possibleItem.productQuantity;
        updateItemQuantityByIndexFunction(state, {
            payload: {
                productId,
                newQuantity: currentQuantity + quantity,
                price,
                index: possibleItemIndex
            }
        });
    } else {
        state.items = [...state.items, {productId, productQuantity: quantity, productPrice: price}];
        state.totalToBePaid += quantity * price;
    }

};
let updateItemQuantityByIndexFunction = (state: CartSliceState, action: {
    payload: {
        productId: number,
        newQuantity: number,
        price: number,
        index: number
    }
}) => {
    const productId = action.payload.productId;
    const newQuantity = action.payload.newQuantity;
    const price = action.payload.price;
    const index = action.payload.index;
    const newProduct: CartProduct = {
        productId,
        productQuantity: newQuantity,
        productPrice: price
    }
    state.items = state.items.map((item, i) => i === index ? newProduct : item);
    calculateTotal(state)
};

let calculateTotal = (state: CartSliceState) => {
    state.totalToBePaid = state.items.reduce((sum, item) => sum + item.productQuantity * item.productPrice, 0);
};
let removeItem1 = (state: CartSliceState, action: { payload: { productId: number, price: number } }): void => {
    let possibleItem = state.items.find((item) =>
        item.productId === action.payload.productId
    );
    if (possibleItem) {
        state.items = state.items.filter((item) => item.productId !== action.payload.productId);
        calculateTotal(state)
    }
};
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: new Array<CartProduct>(),
        totalToBePaid: 0,
    },
    reducers: {
        addItem: addItemFunction,
        updateItemQuantityByIndex: updateItemQuantityByIndexFunction,
        clearCart: (state: CartSliceState) => {
            state.items = [];
            state.totalToBePaid = 0;
        },
        removeItem: removeItem1,
        decreaseItemQuantity: (state: CartSliceState, action: { payload: { productId: number, price: number } }) => {
            let possibleItem = state.items.find((item) =>
                item.productId === action.payload.productId
            );
            if (possibleItem) {
                const currentQuantity = possibleItem.productQuantity;
                if (currentQuantity > 1) {
                    updateItemQuantityByIndexFunction(state, {
                        payload: {
                            productId: action.payload.productId,
                            newQuantity: currentQuantity - 1,
                            price: action.payload.price,
                            index: state.items.indexOf(possibleItem)
                        }
                    });
                } else {
                    removeItem1(state, {payload: {productId: action.payload.productId, price: action.payload.price}});
                }
            }
        },
        increaseItemQuantity: (state: CartSliceState, action: {
            payload: { productId: number, price: number, quantity: number }
        }) => {
            let possibleItem = state.items.find((item) =>
                item.productId === action.payload.productId
            );
            if (possibleItem) {
                updateItemQuantityByIndexFunction(state, {
                    payload: {
                        productId: action.payload.productId,
                        newQuantity: possibleItem.productQuantity + 1,
                        price: action.payload.price,
                        index: state.items.indexOf(possibleItem)
                    }
                });
            }
        },
        calculateTotal,
    }
});

export const {addItem, removeItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions;

export default cartSlice.reducer;