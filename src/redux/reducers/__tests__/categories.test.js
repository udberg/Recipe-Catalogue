import categories from '../categories';

describe('categories reducer', () => {
  test('should return initial state', () => {
    expect(categories(undefined, {})).toEqual([]);
  });
});
