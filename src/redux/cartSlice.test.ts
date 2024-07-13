import {cartSlice, CartSliceState} from "./cartSlice";
import {useDispatch} from "react-redux";
import {createStore} from "@reduxjs/toolkit";

describe('Cart Slice', () => {

    test('it should handle adding an item to the cart', () => {
        // Arrange
        const initialState: CartSliceState = {items: [], totalToBePaid: 0};
        const daPayload = {productId: 1, quantity: 2, price: 4};

        const addToCart = cartSlice.actions.addItem;
        //const dispatch = useDispatch();

        const realStore = createStore(cartSlice.reducer, initialState);

        // Act
        realStore.dispatch(addToCart(daPayload));

        // Assert
        expect(realStore.getState()).toEqual({items: [{productId: 1, quantity: 2}], totalToBePaid: 8});
    });

    test('decreaseItemQuantity_whenItemHasMoreThanOne_shouldDecreaseQuantityAndUpdateTotal', () => {
        // Arrange
        const initialState: CartSliceState = {
            items: [{productId: 1, productQuantity: 2, productPrice: 4}],
            totalToBePaid: 8
        };
        const daPayload = {productId: 1, price: 4};
        const realStore = createStore(cartSlice.reducer, initialState);

        // Act
        realStore.dispatch(cartSlice.actions.decreaseItemQuantity(daPayload));

        expect(realStore.getState()).toEqual({
            items: [{productId: 1, productQuantity: 1, productPrice: 4}],
            totalToBePaid: 4
        });

    });

    test('it should handle clearing the cart', () => {
        // Arrange
        const initialState: CartSliceState = {
            items: [{productId: 1, productQuantity: 2, productPrice: 4}],
            totalToBePaid: 12
        };
        const realStore = createStore(cartSlice.reducer, initialState);

        // Act
        realStore.dispatch(cartSlice.actions.clearCart());

        expect(realStore.getState()).toEqual({items: [], totalToBePaid: 0});
    })
})