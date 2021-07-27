import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Category from '../components/Category';
import grid from '../styles/grid.css';

const cx = classNames.bind(grid);

const Categories = ({ categories }) => (
  <div className={cx('grid', 'grid-column', 'grid-gap-1/5')}>
    {categories ? categories.map((category) => <Category key={category.idCategory} category={category} />) : 'No categories'}
  </div>
);

Categories.defaultProps = {
  categories: [],
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Categories);
