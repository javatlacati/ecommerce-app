import {cartSlice, CartSliceState} from "./cartSlice";
import {useDispatch} from "react-redux";

describe('Cart Slice', () => {
    test('it should handle adding an item to the cart', () => {
        // Arrange
        const initialState: CartSliceState = {items: [], totalToBePaid: 0};
        const daPayload = {productId: 1, quantity: 2, price: 4};

        const addToCart = cartSlice.actions.addItem;
        const dispatch = useDispatch();

        // Act
        dispatch(addToCart(daPayload));

        // Assert
        expect(initialState).toEqual({items:[{productId: 1, quantity: 2}], totalToBePaid: 12});
    });

    // test('it should handle removing an item from the cart', () => {
    //     // Arrange
    //     const initialState: CartSliceState = {items: [{productId:1,productQuantity:2, productPrice:4}], totalToBePaid: 12};
    //     const dispatch = useDispatch();
    //     const daPayload = {payload: {id: 1, quantity: 2}};
    //     dispatch(cartSlice.actions.removeItem(daPayload));
    //     if (initialState.items) {
    //         expect(initialState.items.get('1')).toBe(undefined);
    //     }
    //
    // });


})