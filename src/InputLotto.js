import { CONSOLE_MESSAGE } from './Constants.js';

/**
 * 로또 구매 금액을 입력받고 숫자로 반환하는 함수
 * @returns {Promise<number>} - 사용자가 입력한 구매 금액
 */
export async function getLottoMoney() {
  const purchaseAmount = await Console.readLineAsync(
    `${CONSOLE_MESSAGE.PURCHASE_MONEY}\n`,
  );

  return Number(purchaseAmount);
}
