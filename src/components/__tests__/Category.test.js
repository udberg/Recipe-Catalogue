import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Category from '../Category';

test('successful rendering of component', () => {
  const category = {
    strCategory: 'beef',
    strCategoryThumb: 'some image path',
  };
  const { container } = render(
    <MemoryRouter>
      <Category category={category} />
    </MemoryRouter>,
  );

  expect(container.textContent).toMatch(category.strCategory);
});
