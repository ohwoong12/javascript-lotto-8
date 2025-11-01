import { Console } from '@woowacourse/mission-utils';
import * as InputLotto from './InputLotto.js';

class App {
  async run() {
    const purchaseCost = await InputLotto.getLottoMoney();

    const purchaseCount = purchaseCost / LOTTO_CALCULATE_NUMBER.PER_LOTTO_PRICE;
  }
}

export default App;
