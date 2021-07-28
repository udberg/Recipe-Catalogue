import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ConfigureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Meals from '../Meals';
import * as actionsType from '../../redux/actions/actionTypes';

const mockStore = ConfigureMockStore([thunk]);
jest.mock('../../API/api');

test('should test for loading text', () => {
  const store = mockStore({
    meals: {
      meals: [],
      status: actionsType.LOADING_MEALS,
      error: null,
    },
  });
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Meals />
      </MemoryRouter>
    </Provider>,
  );

  expect(screen.getByText('Loading ...')).toBeInTheDocument();
});

test('should test for error text', () => {
  const store = mockStore({
    meals: {
      meals: [],
      status: actionsType.ERROR_MEALS,
      error: 'something went wrong.',
    },
  });
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Meals />
      </MemoryRouter>
    </Provider>,
  );

  expect(screen.getByText(/something went wrong./)).toBeInTheDocument();
});

test('should test for loaded meals', () => {
  const store = mockStore({
    meals: {
      meals: [
        {
          idMeal: '1',
          strMeal: 'Meal first',
        },
      ],
      status: actionsType.SUCCESS_MEALS,
      error: null,
    },
  });
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Meals />
      </MemoryRouter>
    </Provider>,
  );

  expect(screen.getByText('Meal first')).toBeInTheDocument();
});
