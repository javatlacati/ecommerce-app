import React, {FC} from 'react';
import {CleanButton} from "../AppStyle";
import {Product} from "../../models/Product";
import {addItem} from "../../redux/cartSlice";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";


export interface ProductCardProps {
    product: Product,
    withLink?: boolean
}

const ProductCard: FC<ProductCardProps> = ({product, withLink = false}) => {
    const dispatch = useDispatch();
    return (
        <div data-testid="ProductCard">
            {withLink ? <Link to={'/products/' + product.id}>{product.name}</Link> : product.name}
            <br/>
            {product.price}
            <br/>
            {product.image}
            <br/>
            {product.description}
            <br/>
            <CleanButton onClick={() => {
                dispatch(addItem({productId: product.id, quantity: 1, price: product.price}));
            }}>Add to cart
            </CleanButton>
        </div>
    );
};

export default ProductCard;
