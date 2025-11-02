import * as InputLotto from './view/InputView.js';
import LottoNumberGnerator from './LottoGnerator.js';
import { LOTTO_CALCULATE_NUMBER } from './Constants.js';
import { countRanks, calculateProfitRate } from './CalculateLottoResult.js';
import {
  printLottoTicket,
  printProfitRate,
  printPurchaseCount,
  printStatistics,
} from './view/OutputView.js';

class App {
  async run() {
    const purchaseCost = await InputLotto.getLottoMoney();

    const purchaseCount = purchaseCost / LOTTO_CALCULATE_NUMBER.PER_LOTTO_PRICE;

    const lottoObjects = LottoNumberGnerator(purchaseCount);

    printPurchaseCount(purchaseCount);
    printLottoTicket(lottoObjects);

    const winningNumber = await InputLotto.getCorrectNumber();

    const bonusNumber = await InputLotto.getBonusNumber();

    // 오름차순으로 몇등인지 배열에 담음
    // ex: [0,0,0,3,5]
    const lottoRankArray = lottoObjects.map((ele) =>
      ele.showFinalResult(winningNumber, bonusNumber),
    );
    const sortedlottoRankArray = lottoRankArray.sort((a, b) => a - b);

    const lottoWinnerArray = countRanks(sortedlottoRankArray);

    printStatistics(lottoWinnerArray);

    const profitRate = calculateProfitRate(purchaseCost, lottoWinnerArray);
    printProfitRate(profitRate);
  }
}

export default App;
