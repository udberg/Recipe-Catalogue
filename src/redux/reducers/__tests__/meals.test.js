import meal from '../meal';
import * as actionsType from '../../actions/actionTypes';

describe('meal reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      meal: {},
      status: actionsType.IDLE_MEAL,
      error: null,
    };
  });

  test('should return initial state', () => {
    expect(meal(undefined, {})).toEqual(initialState);
  });

  test('should return the loading status', () => {
    const action = {
      type: actionsType.LOADING_MEAL,
    };
    expect(meal(initialState, action)).toEqual({
      ...initialState,
      status: actionsType.LOADING_MEAL,
    });
  });

  test('should return the error status with error', () => {
    const action = {
      type: actionsType.ERROR_MEAL,
      error: 'Error while fetching data.',
    };
    expect(meal(initialState, action)).toEqual({
      ...initialState,
      status: actionsType.ERROR_MEAL,
      error: action.error,
    });
  });

  test('should return the success status with meal', () => {
    const action = {
      type: actionsType.SUCCESS_MEAL,
      data: {
        idMeal: '123',
        strMeal: 'Test meal',
      },
    };
    expect(meal(initialState, action)).toEqual({
      ...initialState,
      status: actionsType.SUCCESS_MEAL,
      error: null,
      meal: action.data,
    });
  });
});
