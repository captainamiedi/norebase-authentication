import React from 'react';
import { render } from '@testing-library/react';
import { BasicSignup } from './signup.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSignup />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
