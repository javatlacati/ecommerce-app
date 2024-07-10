import React, { lazy, Suspense } from 'react';

const LazyProductDetails = lazy(() => import('./ProductDetails'));

const ProductDetails = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProductDetails {...props} />
  </Suspense>
);

export default ProductDetails;
