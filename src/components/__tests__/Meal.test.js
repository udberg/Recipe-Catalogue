import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Meal from '../Meal';

test('successful rendering of meal component', () => {
  const meal = {
    idMeal: '1234',
    strMealThumb: 'some image path',
    strMeal: 'Meal name',
  };
  const { container } = render(
    <MemoryRouter>
      <Meal meal={meal} />
    </MemoryRouter>,
  );

  expect(container.textContent).toMatch(meal.strMeal);
});
