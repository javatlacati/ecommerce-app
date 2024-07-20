import React, {Dispatch, FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import HeaderMenu from "../HeaderMenu/HeaderMenu.lazy";
import ProductCard from "../ProductCard/ProductCard.lazy";
import {fetchProducts} from "../../util/http";
import {Product} from "../../models/Product";
import {setProducts} from "../../redux/productSlice";
import {ProductSorting, SortOrder} from "../../util/ProductSorting";
import {PriceRangeSpecification} from "../../util/specifications/PriceRangeSpecification";
import {ProductFilter} from "../../util/ProductFilter";


interface ProductListingProps {
}

const ProductListing: FC<ProductListingProps> = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.products);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(5000);
    const [sortField, setSortField] = useState('name');
    const [sortOrder, setSortOrder] = useState(SortOrder.ASCENDING);
    const filter = new ProductFilter(new PriceRangeSpecification(minPrice, maxPrice));

    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
    const sortProducts = (theProductsFiltered: Product[]) => {
        const productSorting = new ProductSorting<Product>();
        setFilteredProducts(productSorting.sort(theProductsFiltered, sortField, sortOrder));
    };
    const filterProducts = () => {
        sortProducts(filter.filter(products));
    }

    useEffect(() => {
        filterProducts()
    }, [products]);

    useEffect(() => {
        fetchProducts().then((response) => {
            const responseProducts: Product[] = response['products'] as Product[];
            dispatch(setProducts(responseProducts));
        });
    }, []);


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
                <label htmlFor="sortField">Ordenar por &nbsp;</label>
                <select id="sortField" value={sortField} onChange={(e) => setSortField(e.target.value)}>
                    <option value="name">Nombre</option>
                    <option value="price">Precio</option>
                </select>
                <label htmlFor="sortOrder">Orden &nbsp;</label>
                <select id="sortOrder" value={sortOrder == SortOrder.ASCENDING ? 'ASCENDING' : 'DESCENDING'}
                        onChange={(e) => setSortOrder(e.target.value === 'ASCENDING' ? SortOrder.ASCENDING : SortOrder.DESCENDING)}>
                    <option value="ASCENDING">Ascendente</option>
                    <option value="DESCENDING">Descendente</option>
                </select>
                <button onClick={filterProducts}>Ordenar y filtrar</button>
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
