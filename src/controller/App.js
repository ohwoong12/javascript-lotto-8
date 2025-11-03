import * as InputLotto from '../view/InputView.js';
import LottoNumberGnerator from '../model/LottoGnerator.js';
import { LOTTO_CALCULATE_NUMBER } from '../utils/Constants.js';
import { calculatorFinalResults } from '../model/CalculateFinalResults.js';
import {
  printLottoTicket,
  printProfitRate,
  printPurchaseCount,
  printStatistics,
} from '../view/OutputView.js';

class App {
  async run() {
    const purchaseCost = await InputLotto.getLottoMoney();
    const purchaseCount = purchaseCost / LOTTO_CALCULATE_NUMBER.PER_LOTTO_PRICE;
    const lottoObjects = LottoNumberGnerator(purchaseCount);

    printPurchaseCount(purchaseCount);
    printLottoTicket(lottoObjects);

    const winningNumber = await InputLotto.getCorrectNumber();
    const bonusNumber = await InputLotto.getBonusNumber(winningNumber);

    const finalResult = calculatorFinalResults(
      lottoObjects,
      winningNumber,
      bonusNumber,
      purchaseCost,
    );

    printStatistics(finalResult.statistics);
    printProfitRate(finalResult.profitRate);
  }
}

export default App;
