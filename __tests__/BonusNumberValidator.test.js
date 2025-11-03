import validateBonusNumber from '../src/utils/BonusNumberValidator.js';
import { ERROR_MESSAGE } from '../src/utils/Constants.js';

describe('BonusNumberValidator 테스트', () => {
  const winningNumber = [1, 2, 3, 4, 5, 6];

  test('보너스 번호가 숫자가 아닐 시 에러 발생 (from validateTypeNumber)', () => {
    const input = 'a';
    expect(() => validateBonusNumber(input, winningNumber)).toThrow(
      `${ERROR_MESSAGE.COMMON.TYPE}\n`,
    );
  });

  test('보너스 번호가 정수가 아닐 시 에러 발생 (from validateNumberIsInteger)', () => {
    const input = 7.5;
    expect(() => validateBonusNumber(input, winningNumber)).toThrow(
      ERROR_MESSAGE.COMMON.TYPE,
    );
  });

  test('보너스 번호가 1~45 범위를 벗어날 시 에러 발생 (from validateBonusNumberRange)', () => {
    const input = 46;
    expect(() => validateBonusNumber(input, winningNumber)).toThrow(
      ERROR_MESSAGE.COMMON.RANGE,
    );
  });

  test('보너스 번호가 당첨 번호와 중복될 시 에러 발생 (from validateWinningNumberAndBounusNumberDuplicate)', () => {
    const input = 6; // winningNumber에 6이 포함되어 있음
    expect(() => validateBonusNumber(input, winningNumber)).toThrow(
      ERROR_MESSAGE.BONUS_NUMBER.DUPLICATE,
    );
  });

  test('유효한 보너스 번호(7) 입력 시 에러가 발생하지 않음', () => {
    const input = 7;
    expect(() => validateBonusNumber(input, winningNumber)).not.toThrow();
  });
});
