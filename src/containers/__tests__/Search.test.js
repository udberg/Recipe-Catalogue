import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ConfigureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Search from '../Search';

const mockStore = ConfigureMockStore([thunk]);
jest.mock('../../API/api');

let store;
beforeEach(() => {
  store = mockStore({});
});

test('should test for search component snapshot', () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    </Provider>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
