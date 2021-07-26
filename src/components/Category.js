import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import card from '../styles/card.css';

const cx = classNames.bind(card);

const Category = ({ category }) => (
  <div className={cx('card')}>
    <Link to={`/meals/${category.strCategory}`} className={cx('card-link')}>
      <img className={cx('card-img')} src={category.strCategoryThumb} alt={category.strCategory} />
      <div className={cx('card-body')}>
        <h3 className={cx('card-title')}>
          {category.strCategory}
        </h3>
      </div>
    </Link>
  </div>
);

Category.propTypes = {
  category: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Category;
