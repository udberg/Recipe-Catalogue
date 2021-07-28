import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import mealsReducer from './meals';
import mealReducer from './meal';
import categoryReducer from './category';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  meals: mealsReducer,
  meal: mealReducer,
  category: categoryReducer,
});

export default rootReducer;
