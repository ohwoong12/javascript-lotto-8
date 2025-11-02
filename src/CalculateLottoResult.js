import { RANKING_INFO } from './Constants.js';

/**
 * 등수가 담겨있는 배열을 각 등수 별로 몇개인지 세어 새로운 배열로 반환하는 함수
 * @param {number[]} ranksArray - 각 로또 한장의 등수가 담겨있는 배열
 * @returns {number[]} - 1~5등이 몇개인지 순서대로 담겨있는 배열
 */
export function countRanks(ranksArray) {
  const initialArray = [0, 0, 0, 0, 0, 0];

  const countsArray = ranksArray.reduce((acc, currentNum) => {
    if (currentNum >= 1 && currentNum <= 5) acc[currentNum] += 1;
    return acc;
  }, initialArray);
  return countsArray;
}

/**
 * 로또 상금을 계산하는 함수
 * @param {number[]} lottoWinnerArray - 1~5등이 몇개인지 순서대로 담겨있는 배열
 * @returns {number} - 총 상금
 */
export function calculateLottoPrizeMoney(lottoWinnerArray) {
  const totalPrize = RANKING_INFO.reduce((sum, rankInfo) => {
    const count = lottoWinnerArray[rankInfo.index];

    return sum + count * rankInfo.prize;
  }, 0);

  return totalPrize;
}

/**
 * 총 수익률을 계산하는 함수
 * @param {number} purchseCost - 구매 비용
 * @param {number[]} ranksArray - 각 로또 한장의 등수가 담겨있는 배열
 */
export function calculateProfitRate(purchseCost, lottoWinnerArray) {
  const winRate = calculateLottoPrizeMoney(lottoWinnerArray);
  const returnRate = (winRate / purchseCost) * 100;
  const roundedRate = Math.round(returnRate * 10) / 10;

  return roundedRate;
}
