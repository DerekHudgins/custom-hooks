import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ItemDetails from '../ItemDetails';

describe('ItemDetails component', () => {
  afterEach(() => cleanup());
  it('renders ItemDetails', () => {
    const { asFragment } = render(
      <ItemDetails character={[{ pokemon: 'pokemon' }]} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
