import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import * as actionsType from '../redux/actions/actionsType';
import Meal from '../components/Meal';
import { fetchMealsByCategory } from '../redux/actions/thunk';
import { changeCategory } from '../redux/actions/index';
import grid from '../styles/grid.css'

const cx = classNames.bind(grid);

const Meals = ({
    meals: { meals, status, error }, fetchMealsByCategory, category, changeCategory
}) => {
    const { categoryType } = useParams();

    useEffect(() => {
        changeCategory(categoryType);
        if (status === actionsType.IDLE_MEALS || categoryType) {
            fetchMealsByCategory(categoryType || 'beef');
        }
    }, [category]);

    if (status === actionsType.LOADING_MEAL) {
        return <div>Loading ...</div>;
    }

    if (status === actionsType.ERROR_MEALS) {
        return (
            <div>
                Error:
                {error}
            </div>
        );
    }

    return (
        
    )
}