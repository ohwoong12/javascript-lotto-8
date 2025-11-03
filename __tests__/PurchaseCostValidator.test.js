import validatePurchaseCost from '../src/utils/PurchaseCostValidator.js';
import { ERROR_MESSAGE } from '../src/utils/Constants.js';

describe('PurchaseCostValidator 테스트', () => {
  test('구매 금액이 숫자가 아닐 시 에러 발생 (from validateTypeNumber)', () => {
    const input = '1000j';
    expect(() => validatePurchaseCost(input)).toThrow(
      `${ERROR_MESSAGE.COMMON.TYPE}\n`,
    );
  });

  test('구매 금액이 정수가 아닐 시 에러 발생 (from validateNumberIsInteger)', () => {
    const input = 1000.5;
    expect(() => validatePurchaseCost(input)).toThrow(
      ERROR_MESSAGE.COMMON.TYPE,
    );
  });

  test('구매 금액이 양수가 아닐 시 (0) 에러 발생 (from validatePurchaseCostIsPositive)', () => {
    const input = 0;
    expect(() => validatePurchaseCost(input)).toThrow(
      ERROR_MESSAGE.COMMON.TYPE,
    );
  });

  test('구매 금액이 1,000원 단위가 아닐 시 에러 발생 (from validatePurchaseCostUnit)', () => {
    const input = 1500;
    expect(() => validatePurchaseCost(input)).toThrow(
      ERROR_MESSAGE.PURCHASE.UNIT,
    );
  });

  test('유효한 구매 금액(3000) 입력 시 에러가 발생하지 않음', () => {
    const input = 3000;
    expect(() => validatePurchaseCost(input)).not.toThrow();
  });
});
