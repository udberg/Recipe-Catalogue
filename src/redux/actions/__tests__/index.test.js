import * as actions from '../index';
import * as actionsType from '../actionTypes';

test('should create an action to load meals', () => {
  const expectedAction = {
    type: actionsType.LOADING_MEALS,
  };

  expect(actions.loadingMeals()).toEqual(expectedAction);
});

test('should create an action to error meals', () => {
  const error = 'Somethig went wrong';
  const expectedAction = {
    type: actionsType.ERROR_MEALS,
    error,
  };

  expect(actions.errorMeals(error)).toEqual(expectedAction);
});

test('should create an action to success meals', () => {
  const data = {
    meals: {
      strMeal: 'First meal',
      strMealThumb: 'image path',
      idMeal: '1234',
    },
  };
  const expectedAction = {
    type: actionsType.SUCCESS_MEALS,
    data,
  };

  expect(actions.successMeals(data)).toEqual(expectedAction);
});

test('should create an action to load meal', () => {
  const expectedAction = {
    type: actionsType.LOADING_MEAL,
  };

  expect(actions.loadingMeal()).toEqual(expectedAction);
});

test('should create an action to error meal', () => {
  const error = 'Somethig went wrong';
  const expectedAction = {
    type: actionsType.ERROR_MEAL,
    error,
  };

  expect(actions.errorMeal(error)).toEqual(expectedAction);
});

test('should create an action to success meal', () => {
  const data = {
    meals: [{
      strMeal: 'First meal',
      strMealThumb: 'image path',
      idMeal: '1234',
    }],
  };
  const expectedAction = {
    type: actionsType.SUCCESS_MEAL,
    data,
  };

  expect(actions.successMeal(data)).toEqual(expectedAction);
});
