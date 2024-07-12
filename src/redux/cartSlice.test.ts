import {cartSlice, CartSliceState} from "./cartSlice";
import {useDispatch} from "react-redux";

describe('Cart Slice', () => {
    test('it should handle adding an item to the cart', () => {
        // Arrange
        const initialState: CartSliceState = {items: null, totalToBePaid: 0};
        const daPayload = {payload: {id: 1, quantity: 2}};

        const addToCart = cartSlice.actions.addItem;
        const dispatch = useDispatch();

        // Act
        dispatch(addToCart(daPayload));

        // Assert
        expect(initialState.items).toEqual([{id: 1, quantity: 2}]);
    });

    // test('it should handle removing an item from the cart', () => {
    //     // Arrange
    //     const initialState = {items: [{id: 1, quantity: 2}]};
    //     const action = {type: 'REMOVE_FROM_CART', payload: {id: 1}};
    //
    //     // Act
    //     const newState = cartSlice(initialState, action);
    //
    //     // Assert
    //     expect(newState.items).toEqual([]);
    // });


})