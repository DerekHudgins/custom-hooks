/* eslint-disable max-len */
global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import allCharacters from '../../fixtures/allCharacters.json';
import Main from '../Main';

const server = setupServer(
  rest.get(
    'https://pokedex-alchemy.herokuapp.com/api/pokedex',
    (req, res, ctx) => {
      return res(ctx.json(allCharacters));
    }
  )
);

describe('tests container for behaviors', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('tests the Main screen renders, displays a loading notification, and then loads data from the API', () => {
    render(
      <Router>
        <Main />
      </Router>
    );

    screen.getByText('Loading...');

    return waitFor(() => {
      screen.getByText('butterfree');
      screen.getByText('pidgeotto');
      screen.getByText('arbok');
    });
  });
});
