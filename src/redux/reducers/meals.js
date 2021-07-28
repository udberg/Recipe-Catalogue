import * as actionsType from '../actions/actionTypes';

const mealsReducer = (
  state = { meals: [], status: actionsType.IDLE_MEALS, error: null },
  action,
) => {
  switch (action.type) {
    case actionsType.LOADING_MEALS:
      return {
        ...state,
        status: actionsType.LOADING_MEALS,
      };
    case actionsType.ERROR_MEALS:
      return {
        ...state,
        status: actionsType.ERROR_MEALS,
        error: action.error,
      };
    case actionsType.SUCCESS_MEALS:
      return {
        ...state,
        status: actionsType.SUCCESS_MEALS,
        meals: action.data,
        error: null,
      };
    default:
      return state;
  }
};

export default mealsReducer;
