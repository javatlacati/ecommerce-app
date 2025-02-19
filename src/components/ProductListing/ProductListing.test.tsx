import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductListing from './ProductListing';

describe('<ProductListing />', () => {
  test('it should mount', () => {
    render(<ProductListing />);

    let productListing  = screen.getByTestId('ProductListing');

    expect(productListing).toBeInTheDocument();
  });
});