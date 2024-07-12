import React, {FC} from 'react';
import {useSelector} from "react-redux";
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
    let [totalPrice, setTotalPrice] = React.useState(0);
    return (
        <div data-testid="Cart">
            <h2>Selected products:</h2>
            {cart && cart.items && Array.from((cart.items as Map<string, number>))?.map(([productId, quantity], index) => {
                const product = products.find((p) => (p.id + "") === productId);
                return (
                    <div data-testid="ProductDetails" key={index}>
                        {product && product.name}
                        <br/>
                        {product && product.price}
                        <br/>
                        {product && product.image && <img src={product.image} alt={product.description}/>}
                        <br/>
                        {product && `Quantity: ${quantity}`}
                        <br/>
                        <br/>
                        <b>Total</b>: {cart.totalToBePaid}
                        <br/>
                        <CleanButton onClick={() => {
                        }}>Add to cart
                        </CleanButton>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;
