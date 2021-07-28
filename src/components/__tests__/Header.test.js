import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ConfigureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Header from '../Header';

const mockStore = ConfigureMockStore([thunk]);

let store;

beforeEach(() => {
  store = mockStore({});
});

test('should match the snapshot', () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
