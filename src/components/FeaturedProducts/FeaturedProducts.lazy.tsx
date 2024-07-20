import React, { lazy, Suspense } from 'react';

const LazyFeaturedProducts = lazy(() => import('./FeaturedProducts'));

const FeaturedProducts = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFeaturedProducts {...props} />
  </Suspense>
);

export default FeaturedProducts;
