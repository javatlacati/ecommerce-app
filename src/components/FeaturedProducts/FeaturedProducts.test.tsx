import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeaturedProducts from './FeaturedProducts';

describe('<FeaturedProducts />', () => {
  test('it should mount', () => {
    render(<FeaturedProducts />);


    expect(FeaturedProducts).toBeInTheDocument();
  });
});