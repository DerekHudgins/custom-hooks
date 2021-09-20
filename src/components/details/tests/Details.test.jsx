/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import characterByName from '../../../fixtures/characterByName.json';
import Details from '../Details';

const server = setupServer(
  rest.get(
    'https://pokedex-alchemy.herokuapp.com/api/pokedex',
    (req, res, ctx) => {
      return res(ctx.json(characterByName));
    }
  )
);

describe('tests container for behaviors', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('tests the Details screen renders, displays a loading notification, and then loads data from the API as expected', () => {
    render(
      <Router>
        <Details />
      </Router>
    );

    screen.getByText('Loading...');

    return waitFor(() => {
      screen.getByText('bulbasaur');
    });
  });
});
