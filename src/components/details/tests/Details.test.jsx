import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import Details from '../Details';

describe('Details component', () => {
  afterEach(() => cleanup());
  it('renders Details', () => {
    const { asFragment } = render(
      <Router>
        <Details />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
