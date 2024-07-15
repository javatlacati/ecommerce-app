import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderMenu from "./HeaderMenu";

describe('<HeaderMenu />', () => {
  test('it should mount', () => {

    render(<HeaderMenu />);

    expect(HeaderMenu).toBeInTheDocument();
  });
});