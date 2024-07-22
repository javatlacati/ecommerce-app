import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Registration from './Registration';

describe('<Registration />', () => {
  test('it should mount', () => {
    render(<Registration />);


    expect(Registration).toBeInTheDocument();
  });
});