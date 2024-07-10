import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

describe('<Home />', () => {
  test('it should mount', () => {
    render(<Home />);

    const Home = screen.getByTestId('Home');

    expect(Home).toBeInTheDocument();
  });
});