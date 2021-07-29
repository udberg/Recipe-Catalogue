import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ConfigureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MealDetail from '../MealDetail';

const mockStore = ConfigureMockStore([thunk]);
window.scrollTo = jest.fn();
jest.mock('../../API/api');

test('should test for empty meal', () => {
  const store = mockStore({
    meal: {
      meal: {},
      status: '',
      error: null,
    },
  });
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter>
        <MealDetail />
      </MemoryRouter>
    </Provider>,
  );

  expect(getByTestId('meal-description').textContent).toMatch('');
});

test('should test meal after action is dispatched', () => {
  const store = mockStore({
    meal: {
      meal: {
        strMeal: 'Testing meal',
        strInstructions: 'This is an instructions for a meal.',
      },
      status: '',
      error: null,
    },
  });

  const { container, getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter>
        <MealDetail />
      </MemoryRouter>
    </Provider>,
  );

  expect(getByTestId('meal-description').textContent).toMatch('This is an instructions for a meal.');
  expect(container.firstChild).toMatchSnapshot();
});
