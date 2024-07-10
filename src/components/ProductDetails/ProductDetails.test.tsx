import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductDetails from './ProductDetails';

describe('<ProductDetails />', () => {
  test('it should mount', () => {
    render(<ProductDetails />);

    const productDetails = screen.getByTestId('ProductDetails');

    expect(productDetails).toBeInTheDocument();
  });
});