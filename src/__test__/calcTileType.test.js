import { calcTileType } from '../js/utils';

test.each([
  [0, 'top-left'],
  [1, 'top'],
  [4, 'top'],
  [7, 'top-right'],
  [8, 'left'],
  [9, 'center'],
  [15, 'right'],
  [56, 'bottom-left'],
  [60, 'bottom'],
  [63, 'bottom-right'],
])('Field cell type %s', (value, expected) => {
  expect(calcTileType(value, 8)).toEqual(expected);
});