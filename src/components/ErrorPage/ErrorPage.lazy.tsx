import React, { lazy, Suspense } from 'react';

const LazyErrorPage = lazy(() => import('./ErrorPage'));

const ErrorPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyErrorPage {...props} />
  </Suspense>
);

export default ErrorPage;
