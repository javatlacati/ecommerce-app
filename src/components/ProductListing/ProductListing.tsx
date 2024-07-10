import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {Link} from "react-router-dom";


interface ProductListingProps {
}

const ProductListing: FC<ProductListingProps> = () => {
    const products = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch();
    // Use an array of product objects to dynamically render product cards.
    // Each product card should display the product name, image, price, and a link to the product details
    // Use state and props to manage and display the products
    // Add filters and sorting options
    return (
        <div data-testid="ProductListing">
            ProductListing Component
            {products && products.map((product) => {
                return (<div key={product.id}><Link to={'/products/' + product.id}>{product.name}</Link></div>)
            })}
        </div>
    );
};

export default ProductListing;
