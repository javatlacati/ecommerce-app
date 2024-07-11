import React, {FC} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {CleanButton} from "../AppStyle";

interface ProductDetailsProps {
}

const ProductDetails: FC<ProductDetailsProps> = () => {
    const {productId} = useParams();
    const products = useSelector((state: RootState) => state.products);
    const product = products.find((p) => p.id === parseInt(productId || '-1'));
    // Show product images, description, price, and an add-to-cart button
    // Use state to manage the product data
    return (
        <div data-testid="ProductDetails">
            {product && product.name}
            <br/>
            {product && product.price}
            <br/>
            {product && product.image}
            <br/>
            <CleanButton onClick={() => {
                alert('Product added to cart');
            }}>Add to cart
            </CleanButton>
        </div>
    );
};

export default ProductDetails;
