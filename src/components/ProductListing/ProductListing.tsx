import React, {Dispatch, FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import HeaderMenu from "../HeaderMenu/HeaderMenu.lazy";
import ProductCard from "../ProductCard/ProductCard.lazy";
import {ProductFilter} from "../../util/ProductFilter";
import {PriceRangeSpecification} from "../../util/specifications/PriceRangeSpecification";
import {useQuery} from "@tanstack/react-query";
import {fetchProducts} from "../../util/http";
import {Product} from "../../models/Product";
import {addProduct} from "../../redux/productSlice";
import {UnknownAction} from "@reduxjs/toolkit";


interface ProductListingProps {
}


const useProductFilter = (products: any[], minPrice: number, maxPrice: number, dispatch: Dispatch<UnknownAction>) => {
    const {data, isLoading} = useQuery({
            queryKey: ['products'],
            refetchInterval: 1000000, // refetch every seconds
            queryFn: () => fetchProducts().then((response) => {
                let responseProducts: Product[] = response['products'] as Product[];

                //responseProducts.forEach((product: Product) => dispatch(addProduct(product)));
            })
        }
    );
    const filter = new ProductFilter(new PriceRangeSpecification(minPrice, maxPrice));
    const [filteredProducts, setFilteredProducts] = useState(filter.filter(products));

    useEffect(() => {
        setFilteredProducts(filter.filter(products));
    }, [products, minPrice, maxPrice]);

    return filteredProducts;
};

const ProductListing: FC<ProductListingProps> = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.products);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(5000);
    const filteredProducts = useProductFilter(products, minPrice, maxPrice, dispatch);
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
                    <ProductCard key={product.id} product={product} withLink={true} withDescription={false}/>
                )
            })}
        </div>
    );
};

export default ProductListing;
