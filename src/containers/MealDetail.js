import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchMealById } from '../redux/actions/thunk';
import * as actionsType from '../redux/actions/actionTypes';
import card from '../styles/card.css';
import styles from '../styles/MealDetail.module.css';

const cx = classNames.bind(card);

const MealDetail = ({ meal: { status, meal, error }, dispatch }) => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id !== meal.idMeal) {
      dispatch(fetchMealById(id));
    }
  }, []);

  if (status === actionsType.LOADING_MEAL) {
    return <div>Loading ...</div>;
  }

  if (status === actionsType.ERROR_MEAL) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  const renderIngrediants = (meal) => {
    const ingrediants = [];
    for (let index = 1; index <= 20; index += 1) {
      const ingrediant = meal[`strIngredient${index}`];
      if (ingrediant) {
        const measure = meal[`strMeasure${index}`];
        const element = (
          <li key={index}>
            <span>
              {measure}
            </span>
            <span>-</span>
            <span>
              {ingrediant}
            </span>
          </li>
        );
        ingrediants.push(element);
      }
    }
    return ingrediants;
  };

  const renderInstructions = (instructions) => {
    if (instructions) {
      const list = instructions.split(new RegExp(/\n/)).filter((item) => item.length > 1);
      return (
        <ul className={cx(styles.items)}>
          {/* eslint-disable-next-line */}
          {list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      );
    }
    return instructions;
  };

  return (
    <div>
      <div className={cx('card-detail')}>
        <img className={cx('card-img')} src={meal.strMealThumb} alt={meal.strMeal} />
        <div>
          <h3 className={cx('card-title')}>{meal.strMeal}</h3>
          <div className={cx(styles.ingredients)}>
            <h4 className={cx(styles.heading)}>Ingredients</h4>
            <ul className={cx(styles.listItem)}>
              {renderIngrediants(meal)}
            </ul>
          </div>
          <div className={cx(styles.instructions)}>
            <h4 className={cx(styles.heading)}>Instructions</h4>
            <div data-testid="meal-description" className={cx(styles.instructions)}>
              {renderInstructions(meal.strInstructions)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MealDetail.propTypes = {
  meal: PropTypes.shape({
    status: PropTypes.string.isRequired,
    error: PropTypes.string,
    meal: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  meal: state.meal,
});

export default connect(mapStateToProps)(MealDetail);
