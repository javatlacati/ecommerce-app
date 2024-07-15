import React, {FC} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import HeaderMenu from "../HeaderMenu/HeaderMenu.lazy";
import ProductCard from "../ProductCard/ProductCard.lazy";

interface ProductDetailsProps {
}

const ProductDetails: FC<ProductDetailsProps> = () => {
    const {productId} = useParams();
    const products = useSelector((state: RootState) => state.products);
    const product = products.find((p) => p.id === parseInt(productId || '-1'));

    return (
        <div data-testid="ProductDetails">
            <HeaderMenu/>
            {product && <ProductCard product={product}/>}
        </div>
    );
};

export default ProductDetails;
