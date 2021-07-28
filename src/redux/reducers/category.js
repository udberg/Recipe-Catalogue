import { CHANGE_CATEGORY } from '../actions/actionTypes';

const categoriesReducer = (state = null, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return action.category || state;
    default:
      return state;
  }
};

export default categoriesReducer;
