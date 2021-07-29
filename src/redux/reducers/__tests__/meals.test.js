import meals from '../meals';
import * as actionsType from '../../actions/actionTypes';

describe('meals reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      meals: [],
      status: actionsType.IDLE_MEALS,
      error: null,
    };
  });

  test('should return initial state', () => {
    expect(meals(undefined, {})).toEqual(initialState);
  });

  test('should return the loading status', () => {
    const action = {
      type: actionsType.LOADING_MEALS,
    };
    expect(meals(initialState, action)).toEqual({
      ...initialState,
      status: actionsType.LOADING_MEALS,
    });
  });

  test('should return the error status with error', () => {
    const action = {
      type: actionsType.ERROR_MEALS,
      error: 'Error while fetching data.',
    };
    expect(meals(initialState, action)).toEqual({
      ...initialState,
      status: actionsType.ERROR_MEALS,
      error: action.error,
    });
  });

  test('should return the success status with meals', () => {
    const action = {
      type: actionsType.SUCCESS_MEALS,
      data: [
        {
          idMeal: '123',
          strMeal: 'Test meals',
        },
      ],
    };
    expect(meals(initialState, action)).toEqual({
      ...initialState,
      status: actionsType.SUCCESS_MEALS,
      error: null,
      meals: action.data,
    });
  });
});
