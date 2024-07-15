import React, {FC, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import HeaderMenu from "../HeaderMenu/HeaderMenu.lazy";
import ProductCard from "../ProductCard/ProductCard.lazy";


interface ProductListingProps {
}

const ProductListing: FC<ProductListingProps> = () => {
    const products = useSelector((state: RootState) => state.products);
    const [filteredProducts, setFilteredProducts] = useState(products);
    // Add filters and sorting options
    return (
        <div data-testid="ProductListing">
            <HeaderMenu/>
            <h2>Product Catalog</h2>
            {filteredProducts && filteredProducts.map((product) => {
                return (
                    <ProductCard key={product.id} product={product} withLink={true}/>
                )
            })}
        </div>
    );
};

export default ProductListing;
