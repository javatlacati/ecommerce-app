import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorPage from './ErrorPage';

describe('<ErrorPage />', () => {
  test('it should mount', () => {
    render(<ErrorPage />);


    expect(ErrorPage).toBeInTheDocument();
  });
});