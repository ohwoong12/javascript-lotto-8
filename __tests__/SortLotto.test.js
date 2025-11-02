import sortLotto from '../src/utils/SortLotto.js';

test('SortLotto: 정렬되지 않은 1차원 배열이 오름차순으로 정렬되어야 한다.', () => {
  const previousSortArray = [8, 5, 23, 7, 42, 9];

  // 실행
  const afterSortArray = sortLotto(previousSortArray);
  // then
  expect(previousSortArray).toEqual(afterSortArray);
});
