import React, {FC} from 'react';
import {CleanButton} from "../AppStyle";
import {Product} from "../../models/Product";
import {addItem} from "../../redux/cartSlice";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";


export interface ProductCardProps {
    product: Product,
    withLink?: boolean,
    withDescription?: boolean,
}

const ProductCard: FC<ProductCardProps> = ({product, withLink = false, withDescription=true}) => {
    const dispatch = useDispatch();
    return (
        <div data-testid="ProductCard" className="product-card" style={{float: "left", margin: '10px'}}>
            {withLink ? <Link to={'/products/' + product.id}>{product.name}</Link> : product.name}
            <br/>
            {product.price}
            <br/>
            {product.image && <img width={150} alt={product.name} src={process.env.PUBLIC_URL + '/assets/' + product.image}/>}
            <br/>
            {withDescription && product.description}
            <br/>
            <CleanButton onClick={() => {
                dispatch(addItem({productId: product.id, quantity: 1, price: product.price}));
            }}>Add to cart
            </CleanButton>
        </div>
    );
};

export default ProductCard;
