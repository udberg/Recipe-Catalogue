import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../thunk';
import * as actionsType from '../actionTypes';
import API from '../../../config/config';

const mockStore = configureMockStore([thunk]);

afterEach(() => {
  fetchMock.restore();
});

describe('dispatch async action to fetch meals by category', () => {
  test('should create meals in the store', () => {
    const data = {
      meals: [
        {
          idMeal: '123',
          strMeal: 'First meal',
        },
      ],
    };

    const expectedAction = [
      { type: actionsType.LOADING_MEALS },
      { data: data.meals, type: actionsType.SUCCESS_MEALS },
    ];

    fetchMock.getOnce(`${API.BASE_URL}/${API.FILTER_ENDPOINT}/?c=beef`, {
      body: data,
      headers: { 'content-type': 'application/json' },
    });

    const store = mockStore({});

    return store.dispatch(actions.fetchMealsByCategory('beef')).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  test('should create error in the store', () => {
    const expectedAction = [
      { type: actionsType.LOADING_MEALS },
      { error: 'Error while fetching data.', type: actionsType.ERROR_MEALS },
    ];

    fetchMock.getOnce(`${API.BASE_URL}/${API.FILTER_ENDPOINT}/?c=beef`, {
      headers: { 'content-type': 'application/json' },
    });

    const store = mockStore({});

    return store.dispatch(actions.fetchMealsByCategory('beef')).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});

describe('dispatch async action to search meals', () => {
  test('should create meals in the store', () => {
    const data = {
      meals: [
        {
          idMeal: '123',
          strMeal: 'Beef meal',
        },
      ],
    };

    const expectedAction = [
      { type: actionsType.LOADING_MEALS },
      { data: data.meals, type: actionsType.SUCCESS_MEALS },
    ];

    fetchMock.getOnce(`${API.BASE_URL}/${API.SEARCH_ENDPOINT}/?s=beef`, {
      body: data,
      headers: { 'content-type': 'application/json' },
    });

    const store = mockStore({});

    return store.dispatch(actions.searchMeals('beef')).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  test('should create error in the store', () => {
    const expectedAction = [
      { type: actionsType.LOADING_MEALS },
      { error: 'Error while fetching data.', type: actionsType.ERROR_MEALS },
    ];

    fetchMock.getOnce(`${API.BASE_URL}/${API.SEARCH_ENDPOINT}/?s=beef`, {
      headers: { 'content-type': 'application/json' },
    });

    const store = mockStore({});

    return store.dispatch(actions.searchMeals('beef')).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});

describe('dispatch async action to fetch meal by id', () => {
  test('should create meal in the store', () => {
    const data = {
      meals: [
        {
          idMeal: '123',
          strMeal: 'Beef meal',
        },
      ],
    };

    const expectedAction = [
      { type: actionsType.LOADING_MEAL },
      { data: data.meals[0], type: actionsType.SUCCESS_MEAL },
    ];

    fetchMock.getOnce(`${API.BASE_URL}/${API.LOOKUP_ENDPOINT}/?i=123`, {
      body: data,
      headers: { 'content-type': 'application/json' },
    });

    const store = mockStore({});

    return store.dispatch(actions.fetchMealById('123')).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  test('should create error in the store', () => {
    const expectedAction = [
      { type: actionsType.LOADING_MEAL },
      { error: 'Error while fetching data.', type: actionsType.ERROR_MEAL },
    ];

    fetchMock.getOnce(`${API.BASE_URL}/${API.LOOKUP_ENDPOINT}/?i=123`, {
      headers: { 'content-type': 'application/json' },
    });

    const store = mockStore({});

    return store.dispatch(actions.fetchMealById('123')).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
