/**
 * 중첩 배열을 오름차순으로 정렬하는 함수
 * @param {number[][]} array - 로또 번호가 저장된 2차원 배열
 * @returns {number[][]} - 각 내부 배열이 오름차순으로 정렬된 2차원 배열
 */
export default function sortLotto(array) {
  const sortedArray = [];

  for (let i = 0; i < array.length; i += 1) {
    sortedArray.push(array[i].sort((a, b) => a - b));
  }

  return sortedArray;
}
