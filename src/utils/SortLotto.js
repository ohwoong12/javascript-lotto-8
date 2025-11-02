/**
 * 중첩 배열을 오름차순으로 정렬하는 함수
 * @param {number[]} lottoNumberArray - 로또 번호가 저장된 배열
 * @returns {number[]} - 오름차순으로 정렬된 배열
 */
export default function sortLotto(lottoNumberArray) {
  return lottoNumberArray.sort((a, b) => a - b);
}
