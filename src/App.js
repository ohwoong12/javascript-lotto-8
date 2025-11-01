import { Console } from '@woowacourse/mission-utils';
import * as InputLotto from './InputLotto.js';
import LottoGnerator from './LottoGnerator.js';
import sortLotto from './SortLotto.js';

class App {
  async run() {
    const purchaseCost = await InputLotto.getLottoMoney();

    const purchaseCount = purchaseCost / LOTTO_CALCULATE_NUMBER.PER_LOTTO_PRICE;

    const lottoNumberArray = LottoGnerator(purchaseCount);
    Console.print(`\n${purchaseCount}${CONSOLE_MESSAGE.PURCHASE_AMOUNT}`);

    const sortedLottoNumberArray = sortLotto(lottoNumberArray);

    const winningNumber = await InputLotto.getCorrectNumber();
    Console.print('');

    const bonusNumber = await InputLotto.getBonusNumber();
    Console.print('');
  }
}

export default App;
