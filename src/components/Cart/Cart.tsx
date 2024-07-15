import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {CleanButton} from "../AppStyle";

interface CartProps {
}

const Cart: FC<CartProps> = () => {
    // Display a list of products added to the cart
    // Allow users to update the quantity of each item or remove items from the cart
    // Show the total price of the items in the cart
    const cart = useSelector((state: RootState) => state.cart);
    const products = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch();
    return (
        <div data-testid="Cart">
            <h2>Selected products:</h2>
            {cart && cart.items && cart.items.map((cartProduct, index) => {
                const product = products.find((p) => p.id === cartProduct.productId);
                return (
                    <div data-testid="ProductDetails" key={index}>
                        {product && product.name}
                        <br/>
                        {product && `$${product.price}`}
                        <br/>
                        {product && product.image && <img src={product.image} alt={product.description}/>}
                        <br/>
                        {product && `Quantity: ${cartProduct.productQuantity}`}
                        <br/>
                        <br/>
                        <b>Subtotal</b>: ${product && (product.price * cartProduct.productQuantity)}
                        <br/>
                        <CleanButton onClick={() => {
                        }}>Quitar de la carta
                        </CleanButton>
                    </div>
                );
            })}
            <div>
                <b>Total:</b> ${cart.totalToBePaid}
            </div>
        </div>
    );
};

export default Cart;
