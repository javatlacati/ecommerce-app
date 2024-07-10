import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from './Cart';

describe('<Cart />', () => {
  test('it should mount', () => {
    render(<Cart />);

    const Cart = screen.getByTestId('Cart');

    expect(Cart).toBeInTheDocument();
  });
});