import React, {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import HeaderMenu from "../HeaderMenu/HeaderMenu.lazy";
import ProductCard from "../ProductCard/ProductCard.lazy";
import {ProductFilter} from "../../util/ProductFilter";
import {PriceRangeSpecification} from "../../util/specifications/PriceRangeSpecification";


interface ProductListingProps {
}

const useProductFilter = (products: any[], minPrice: number, maxPrice: number) => {
    const filter = new ProductFilter(new PriceRangeSpecification(minPrice, maxPrice));
    const [filteredProducts, setFilteredProducts] = useState(filter.filter(products));

    useEffect(() => {
        setFilteredProducts(filter.filter(products));
    }, [products, minPrice, maxPrice]);

    return filteredProducts;
};

const ProductListing: FC<ProductListingProps> = () => {
    const products = useSelector((state: RootState) => state.products);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(5000);
    const filteredProducts = useProductFilter(products, minPrice, maxPrice);
    // Add filters and sorting options
    return (
        <div data-testid="ProductListing">
            <HeaderMenu/>
            <h2>Product Catalog</h2>
            <div>
                <label htmlFor="minPrice">Precio mínimo &nbsp;</label>
                <input id="minPrice" value={minPrice} type="number"
                       onChange={(newValue) => setMinPrice(parseInt(newValue.target.value))}/>  &nbsp;&nbsp;
                <label htmlFor="maxPrice">Precio máximo &nbsp;</label>
                <input id="maxPrice" value={maxPrice} type="number"
                       onChange={(newValue) => setMaxPrice(parseInt(newValue.target.value))}/>&nbsp;
            </div>
            {filteredProducts && filteredProducts.map((product) => {
                return (
                    <ProductCard key={product.id} product={product} withLink={true}/>
                )
            })}
        </div>
    );
};

export default ProductListing;
