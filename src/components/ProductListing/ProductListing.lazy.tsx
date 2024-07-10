import React, { lazy, Suspense } from 'react';

const LazyProductListing = lazy(() => import('./ProductListing'));

const ProductListing = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProductListing {...props} />
  </Suspense>
);

export default ProductListing;
