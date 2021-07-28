import { fetchMeals, fetchMeal, fetchSearchMeals } from '../../API/api';
import {
  loadingMeal, errorMeal, successMeal, loadingMeals, errorMeals, successMeals,
} from './index';

const fetchMealsByCategory = (category) => async (dispatch) => {
  dispatch(loadingMeals());
  const response = fetchMeals(category);
  try {
    const data = await response;
    return dispatch(successMeals(data.meals));
  } catch (e) {
    return dispatch(errorMeals('Error while fetching data.'));
  }
};
