import * as actionsType from './actionsType';

const loadingMeal = () => ({
    type: actionsType.LOADING_MEAL,
});

const successMeals = () => ({
    type: actionsType.SUCCESS_MEAL,
    data,
});

const errorMeals = () => ({
    type: actionsType.ERROR_MEAL,
    error,
});

const loadingMeal = () => ({
    type: actionsType.LOADING_MEAL,
});

const successMeal = (data) = ({
    type: actionsType.LOADING_MEAL,
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
    loadingMeals, errorMeals, successMeals, loadingMeal, errorMeal, successMeal, changeCategory
};
