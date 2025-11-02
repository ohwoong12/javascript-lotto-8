import { Console } from '@woowacourse/mission-utils';
import {
  CONSOLE_MESSAGE,
  RANKING_INFO,
  WINNING_STATISTICS_MESSAGE,
} from '../Constants.js';

/**
 * 로또 구매 수량을 출력하는 함수
 * @param {number} purchaseCount
 */
export function printPurchaseCount(purchaseCount) {
  Console.print(`\n${purchaseCount}${CONSOLE_MESSAGE.PURCHASE_AMOUNT}`);
}

/**
 * 발행된 로또 번호를 출력하는 함수
 * @param {object} lottoObjects - 로또 번호가 담겨있는 객체
 */
export function printLottoTicket(lottoObjects) {
  for (let i = 0; i < lottoObjects.length; i += 1) {
    lottoObjects[i].printLottoNumbers();
  }
}

/**
 * 당첨 통계를 출력하는 함수
 * @param {number[]} ranksArray - 각 로또 한장의 등수가 담겨있는 배열
 */
export function printStatistics(lottoWinnerArray) {
  Console.print(`\n${WINNING_STATISTICS_MESSAGE.WINNING_STATISTICS}`);

  RANKING_INFO.forEach((rankInfo) => {
    const count = lottoWinnerArray[rankInfo.index];
    Console.print(
      `${rankInfo.message}${count}${WINNING_STATISTICS_MESSAGE.AMOUNT}`,
    );
  });
}

/**
 * 총 수익률을 출력하는 함수
 * @param {number} profitRate
 */
export function printProfitRate(profitRate) {
  Console.print(`총 수익률은 ${profitRate}%입니다.`);
}
