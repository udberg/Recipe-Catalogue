import * as actionsType from '../actions/actionTypes';

const mealReducer = (state = { meal: {}, status: actionsType.IDLE_MEAL, error: null }, action) => {
  switch (action.type) {
    case actionsType.LOADING_MEAL:
      return {
        ...state,
        status: actionsType.LOADING_MEAL,
      };
    case actionsType.ERROR_MEAL:
      return {
        ...state,
        status: actionsType.ERROR_MEAL,
        error: action.error,
      };
    case actionsType.SUCCESS_MEAL:
      return {
        ...state,
        status: actionsType.SUCCESS_MEAL,
        meal: action.data,
        error: null,
      };
    default:
      return state;
  }
};

export default mealReducer;
