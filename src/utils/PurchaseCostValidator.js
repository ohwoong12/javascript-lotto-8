import { ERROR_MESSAGE } from './Constants.js';
import {
  validateTypeNumber,
  validateNumberIsInteger,
  validateInputBlank,
} from './CommonValidator.js';

/**
 * 로또 구매 금액이 양수인지 검사하는 함수
 * @param {number} purchaseCost - 로또 구매 금액
 */
function validatePurchaseCostIsPositive(purchaseCost) {
  if (purchaseCost <= 0) {
    throw new Error(ERROR_MESSAGE.COMMON.TYPE);
  }
}

/**
 * 로또 구매 금액이 1,000원 단위인지 검사하는 함수
 * @param {number} purchaseCost - 로또 구매 금액
 */
function validatePurchaseCostUnit(purchaseCost) {
  if (purchaseCost % 1000 !== 0) {
    throw new Error(ERROR_MESSAGE.PURCHASE.UNIT);
  }
}

/**
 * 로또 구매 금액에 대한 유효성 검사를 진행하는 함수
 * - 숫자가 입력되지 않은 경우
 * - 정수가 아닌 경우
 * - 양수가 아닌 경우
 * - 1,000 단위가 아닌 경우
 * @param {number} purchaseCost - 로또 구매 금액
 */
export default function validatePurchaseCost(purchaseCost) {
  validateInputBlank(purchaseCost);
  validateTypeNumber(purchaseCost);
  validateNumberIsInteger(purchaseCost);
  validatePurchaseCostIsPositive(purchaseCost);
  validatePurchaseCostUnit(purchaseCost);
}
