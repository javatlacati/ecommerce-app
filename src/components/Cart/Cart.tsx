import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {CleanButton} from "../AppStyle";
import {CartProduct, decreaseItemQuantity, increaseItemQuantity, removeItem} from "../../redux/cartSlice";
import {Product} from "../../models/Product";
import HeaderMenu from "../HeaderMenu/HeaderMenu.lazy";

interface CartProps {
}

const Cart: FC<CartProps> = () => {
    const cart = useSelector((state: RootState) => state.cart);
    const products = useSelector((state: RootState) => state.products.products);
    const dispatch = useDispatch();

    let productListTemplate = (product: Product, cartProduct: CartProduct) => (
        <div style={{float: 'left', paddingRight: '10px'}}>{product.name}
            <br/>
            ${product.price}
            <br/>
            {product.image && <><img width={150} src={process.env.PUBLIC_URL + '/assets/' + product.image}
                                     alt={product.name}/>
                <br/></>}
            Quantity:&nbsp;
            <button disabled={cartProduct.productQuantity < 1}
                    onClick={() => dispatch(decreaseItemQuantity({productId: product.id, price: product.price}))}>-
            </button>
            &nbsp;{cartProduct.productQuantity}&nbsp;
            <button onClick={() => dispatch(increaseItemQuantity({
                productId: product.id,
                price: product.price,
                quantity: cartProduct.productQuantity
            }))}>+
            </button>
            <br/>
            <br/>
            <b>Subtotal</b>: ${(product.price * cartProduct.productQuantity)}
            <br/>
            <CleanButton onClick={() => {
                dispatch(removeItem({productId: cartProduct.productId, price: cartProduct.productPrice}))
            }}>Quitar de la carta
            </CleanButton></div>);

    return (
        <div data-testid="Cart">
            <HeaderMenu/>
            <h2>Selected products:</h2>
            <div>
                {cart && cart.items && cart.items.map((cartProduct, index) => {
                    const product = products.find((p) => p.id === cartProduct.productId);
                    return (
                        <div data-testid="ProductDetails" key={index} style={{display: 'inline-block'}}>
                            {product && productListTemplate(product, cartProduct)}
                        </div>
                    );
                })}
            </div>
            <hr/>
            <div>
                <b>Total:</b> ${(~~(cart.totalToBePaid * 100) / 100)}
            </div>
        </div>
    );
};

export default Cart;
