import { Route, Switch } from 'react-router-dom';
import Meals from '../containers/Meals';
import Categories from '../containers/Categories';
import MealDetail from '../containers/MealDetail';

const Routes = () => (
  <Switch>
    <Route path="/" component={Meals} exact />
    <Route path="/meal/:id" component={MealDetail} exact />
    <Route path="/categories" component={Categories} exact />
    <Route path="/meals/:categoryType" component={Meals} exact />
  </Switch>
);

export default Routes;
