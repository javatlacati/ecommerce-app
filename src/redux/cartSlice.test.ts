import {cartSlice, CartSliceState} from "./cartSlice";
import {createStore} from "@reduxjs/toolkit";

describe('Cart Slice', () => {

    test('it should handle adding an item to the cart', () => {
        // Arrange
        const initialState: CartSliceState = {items: [], totalToBePaid: 0};
        const daPayload = {productId: 1, quantity: 2, price: 4};

        const addToCart = cartSlice.actions.addItem;

        const realStore = createStore(cartSlice.reducer, initialState);

        // Act
        realStore.dispatch(addToCart(daPayload));

        // Assert
        expect(realStore.getState()).toEqual({
            items: [{productId: 1, productQuantity: 2, productPrice: 4}],
            totalToBePaid: 8
        });
    });

    test('it should handle adding an item twice to the cart', () => {
        // Arrange
        const initialState: CartSliceState = {items: [], totalToBePaid: 0};
        const daPayload = {productId: 1, quantity: 2, price: 4};

        const addToCart = cartSlice.actions.addItem;
        //const dispatch = useDispatch();

        const realStore = createStore(cartSlice.reducer, initialState);

        // Act
        realStore.dispatch(addToCart(daPayload));
        realStore.dispatch(addToCart(daPayload));

        // Assert
        expect(realStore.getState()).toEqual({
            items: [{productId: 1, productQuantity: 4, productPrice: 4}],
            totalToBePaid: 16
        });
    });

    test('it should handle adding an item 3 times to the cart', () => {
        // Arrange
        const initialState: CartSliceState = {items: [], totalToBePaid: 0};
        const daPayload = {productId: 1, quantity: 2, price: 4};

        const addToCart = cartSlice.actions.addItem;
        //const dispatch = useDispatch();

        const realStore = createStore(cartSlice.reducer, initialState);

        // Act
        realStore.dispatch(addToCart(daPayload));
        realStore.dispatch(addToCart(daPayload));
        realStore.dispatch(addToCart(daPayload));

        // Assert
        expect(realStore.getState()).toEqual({
            items: [{productId: 1, productQuantity: 6, productPrice: 4}],
            totalToBePaid: 24
        });
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

    test('it should handle adding two distinct items to the cart', () => {
        const initialState: CartSliceState = {items: [], totalToBePaid: 0};
        const daPayload = {productId: 1, quantity: 2, price: 4};
        const daPayload1 = {productId: 2, quantity: 4, price: 5};

        const addToCart = cartSlice.actions.addItem;

        const realStore = createStore(cartSlice.reducer, initialState);

        realStore.dispatch(addToCart(daPayload));
        realStore.dispatch(addToCart(daPayload1));

        expect(realStore.getState()).toEqual({
            items: [{productId: 1, productQuantity: 2, productPrice: 4}, {
                productId: 2,
                productQuantity: 4,
                productPrice: 5
            }],
            totalToBePaid: 28
        });
        realStore.dispatch(addToCart(daPayload));
        expect(realStore.getState()).toEqual({
            items: [{productId: 1, productQuantity: 4, productPrice: 4}, {
                productId: 2,
                productQuantity: 4,
                productPrice: 5
            }],
            totalToBePaid: 36
        });
    });
})