import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE } from '../utils/Constants.js';
import validatePurchaseCost from '../utils/PurchaseCostValidator.js';
import {
  validateWinningNumber,
  validateWinningNumberSeparator,
} from '../utils/WinningNumberValidator.js';
import validateBonusNumber from '../utils/BonusNumberValidator.js';

/**
 * 주어진 값을 배열로 변환하는 함수
 * @param {string} stringValue - 쉼표로 구분된 입력 문자열
 * @return {string[]} - 분리된 문자열이 담긴 배열
 */
export function splitValue(stringValue) {
  const afterSplitArray = stringValue.split(',');

  return afterSplitArray;
}

/**
 * 문자열 배열을 숫자 배열로 변환하는 함수
 * @param {string[]} stringArray - 문자열 배열
 * @returns {number[]} - 숫자형 배열
 */
export function stringToInt(stringArray) {
  const numberArray = stringArray.map(Number);

  return numberArray;
}

/**
 * 로또 구매 금액을 입력받고 숫자로 반환하는 함수
 * @returns {Promise<number>} - 사용자가 입력한 구매 금액
 */
export async function getLottoMoney() {
  while (true) {
    try {
      const purchaseAmount = await Console.readLineAsync(
        `${CONSOLE_MESSAGE.PURCHASE_MONEY}\n`,
      );

      validatePurchaseCost(purchaseAmount);

      return Number(purchaseAmount);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

/**
 * 6개의 당첨 번호를 입력받고 배열로 반환하는 함수
 * @returns {Promise<string[]>} - 쉼표로 구분하여 입력된 6개의 당첨 번호 (문자열 배열)
 */
export async function getCorrectNumber() {
  while (true) {
    try {
      const winningNumber = await Console.readLineAsync(
        `\n${CONSOLE_MESSAGE.CORRECT_NUMBER}\n`,
      );
      validateWinningNumberSeparator(winningNumber);
      const splitWinningNumber = stringToInt(splitValue(winningNumber));

      validateWinningNumber(splitWinningNumber);

      return splitWinningNumber;
    } catch (error) {
      Console.print(error.message);
    }
  }
}

/**
 * 1개의 보너스 번호를 입력받고 배열로 반환하는 함수
 * @returns {Promise<string[]>} - 보너스 번호가 담긴 문자열 배열
 */
export async function getBonusNumber(winningNumber) {
  while (true) {
    try {
      const bonusNumber = await Console.readLineAsync(
        `\n${CONSOLE_MESSAGE.BONUS_NUMBER}\n`,
      );

      validateBonusNumber(bonusNumber, winningNumber);

      return stringToInt(splitValue(bonusNumber));
    } catch (error) {
      Console.print(error.message);
    }
  }
}
