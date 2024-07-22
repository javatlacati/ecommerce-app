import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';

describe('<Login />', () => {
  test('it should mount', () => {
    render(<Login />);


    expect(Login).toBeInTheDocument();
  });
});