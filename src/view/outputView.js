import { Console } from '@woowacourse/mission-utils';
import { RANKING_INFO, WINNING_STATISTICS_MESSAGE } from '../Constants.js';

export function printLottoTicket(lottoObjects) {
  for (let i = 0; i < lottoObjects.length; i += 1) {
    lottoObjects[i].printLottoNumbers();
  }
  Console.print('');
}

/**
 * 당첨 통계를 출력하는 함수
 * @param {number[]} ranksArray - 각 로또 한장의 등수가 담겨있는 배열
 */
export function printStatistics(lottoWinnerArray) {
  Console.print(`${WINNING_STATISTICS_MESSAGE.WINNING_STATISTICS}`);

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
