import sortLotto from '../src/SortLotto.js';

test('SortLotto: 정렬되지 않은 2차원 배열이 오름차순으로 정렬되어야 한다.', () => {
  const previousSortArray = [
    [8, 21, 23, 41, 42, 43],
    [3, 5, 11, 16, 32, 38],
    [7, 11, 16, 35, 36, 44],
    [1, 8, 11, 31, 41, 42],
    [13, 14, 16, 38, 42, 45],
  ];

  // 실행
  const afterSortArray = sortLotto(previousSortArray);
  // then
  expect(previousSortArray).toEqual(afterSortArray);
});
