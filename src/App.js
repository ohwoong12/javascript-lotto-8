import { Console } from '@woowacourse/mission-utils';
import * as InputLotto from './InputLotto.js';
import LottoGnerator from './LottoGnerator.js';
import { CONSOLE_MESSAGE, LOTTO_CALCULATE_NUMBER } from './Constants.js';
import sortLotto from './SortLotto.js';
import Lotto from './Lotto.js';
import { printProfitRate, printStatistics } from './CalculateLottoResult.js';

class App {
  async run() {
    const purchaseCost = await InputLotto.getLottoMoney();

    const purchaseCount = purchaseCost / LOTTO_CALCULATE_NUMBER.PER_LOTTO_PRICE;

    const lottoNumberArray = LottoGnerator(purchaseCount);
    Console.print(`\n${purchaseCount}${CONSOLE_MESSAGE.PURCHASE_AMOUNT}`);

    const sortedLottoNumberArray = sortLotto(lottoNumberArray);

    const lottoObjects = sortedLottoNumberArray.map(
      (ticketNumbers) => new Lotto(ticketNumbers),
    );

    for (let i = 0; i < lottoObjects.length; i += 1) {
      lottoObjects[i].printLottoNumbers();
    }
    Console.print('');

    const winningNumber = await InputLotto.getCorrectNumber();
    Console.print('');

    const bonusNumber = await InputLotto.getBonusNumber();
    Console.print('');

    // 오름차순으로 몇등인지 배열에 담음
    // ex: [0,0,0,3,5]
    const lottoRankArray = lottoObjects.map((ele) =>
      ele.showFinalResult(winningNumber, bonusNumber),
    );
    const sortedlottoRankArray = lottoRankArray.sort((a, b) => a - b);

    printStatistics(sortedlottoRankArray);
    printProfitRate(purchaseCost, sortedlottoRankArray);
  }
}

export default App;
