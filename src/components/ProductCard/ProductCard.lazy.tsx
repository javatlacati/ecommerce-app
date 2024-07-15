import React, {lazy, Suspense} from 'react';
import {ProductCardProps} from "./ProductCard";

const LazyProductCard = lazy(() => import('./ProductCard'));

const ProductCard = (props: ProductCardProps) => (
    <Suspense fallback={null}>
        <LazyProductCard {...props} />
    </Suspense>
);

export default ProductCard;
