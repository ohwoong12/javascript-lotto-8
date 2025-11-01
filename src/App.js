import { Console } from '@woowacourse/mission-utils';
import * as InputLotto from './InputLotto.js';

class App {
  async run() {
    const purchaseCost = await InputLotto.getLottoMoney();

    const purchaseCount = purchaseCost / LOTTO_CALCULATE_NUMBER.PER_LOTTO_PRICE;

    const winningNumber = await InputLotto.getCorrectNumber();
    Console.print('');

    const bonusNumber = await InputLotto.getBonusNumber();
    Console.print('');
  }
}

export default App;
