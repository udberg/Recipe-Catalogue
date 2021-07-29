import * as actionsType from './actionTypes';

const loadingMeals = () => ({
  type: actionsType.LOADING_MEALS,
});

const successMeals = (data) => ({
  type: actionsType.SUCCESS_MEALS,
  data,
});

const errorMeals = (error) => ({
  type: actionsType.ERROR_MEALS,
  error,
});

const loadingMeal = () => ({
  type: actionsType.LOADING_MEAL,
});

const successMeal = (data) => ({
  type: actionsType.SUCCESS_MEAL,
  data,
});

const errorMeal = (error) => ({
  type: actionsType.ERROR_MEAL,
  error,
});

const changeCategory = (category) => ({
  type: actionsType.CHANGE_CATEGORY,
  category,
});

export {
  loadingMeals, errorMeals, successMeals, loadingMeal, errorMeal, successMeal, changeCategory,
};
