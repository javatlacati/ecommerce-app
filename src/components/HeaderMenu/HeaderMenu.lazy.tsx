import React, { lazy, Suspense } from 'react';
import {HeaderMenuProps} from "./HeaderMenu";

const LazyHeaderMenu = lazy(() => import('./HeaderMenu'));

const HeaderMenu = (props: HeaderMenuProps) => (
  <Suspense fallback={null}>
    <LazyHeaderMenu {...props} />
  </Suspense>
);

export default HeaderMenu;
