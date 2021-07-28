import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import * as actionsType from '../redux/actions/actionTypes';
import Meal from '../components/Meal';
import { fetchMealsByCategory } from '../redux/actions/thunk';
import { changeCategory } from '../redux/actions/index';
import grid from '../styles/grid.css';

const cx = classNames.bind(grid);

const Meals = ({
  meals: { meals, status, error }, fetchMealsByCategory, category, changeCategory,
}) => {
  const { categoryType } = useParams();

  useEffect(() => {
    changeCategory(categoryType);
    if (status === actionsType.IDLE_MEALS || categoryType) {
      fetchMealsByCategory(categoryType || 'beef');
    }
  }, [category]);

  if (status === actionsType.LOADING_MEALS) {
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
    <div className={cx('grid', 'grid-column', 'grid-gap-1/5')}>
      {meals && meals.map((meal) => <Meal key={meal.idMeal} meal={meal} />)}
    </div>
  );
};

Meals.defaultProps = {
  category: 'Beef',
};

Meals.propTypes = {
  meals: PropTypes.shape({
    status: PropTypes.string.isRequired,
    error: PropTypes.string,
    meals: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  }).isRequired,
  category: PropTypes.string,
  changeCategory: PropTypes.func.isRequired,
  fetchMealsByCategory: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  meals: state.meals,
  category: state.category,
});

const mapDispatchToProps = (dispatch) => ({
  changeCategory: (category) => dispatch(changeCategory(category)),
  fetchMealsByCategory: (category) => dispatch(fetchMealsByCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Meals);
