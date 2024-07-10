import React, { FC } from 'react';


interface CartProps {}

const Cart: FC<CartProps> = () => {
    // Display a list of products added to the cart
    // Allow users to update the quantity of each item or remove items from the cart
    // Show the total price of the items in the cart
    
    return (
        <div data-testid="Cart">
            Cart Component
        </div>
    );
};

export default Cart;
