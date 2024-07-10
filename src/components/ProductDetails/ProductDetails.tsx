import React, {FC} from 'react';
import {useParams} from "react-router-dom";


interface ProductDetailsProps {
}

const ProductDetails: FC<ProductDetailsProps> = () => {
    const {productId} = useParams();
    // Use dynamic routing to display details of a selected product
    // Show product images, description, price, and an add-to-cart button
    // Use state to manage the product data
    return (
        <div data-testid="ProductDetails">
            ProductDetails Component
            {productId}
        </div>
    );
};

export default ProductDetails;
