import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { searchMeals } from '../redux/actions/thunk';
import styles from '../styles/Search.module.css';

const cx = classNames;

const Search = ({ searchMeals }) => {
  const history = useHistory();

  const handleSearch = (event) => {
    event.preventDefault();
    const { search: { value } } = event.target;
    searchMeals(value);
    event.target.reset();
    history.push('/');
  };

  return (
    <form onSubmit={handleSearch}>
      <input className={cx(styles['search-input'])} type="search" placeholder="Search your recipes" name="search" />
    </form>
  );
};

Search.propTypes = {
  searchMeals: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  searchMeals: (query) => dispatch(searchMeals(query)),
});

export default connect(null, mapDispatchToProps)(Search);
