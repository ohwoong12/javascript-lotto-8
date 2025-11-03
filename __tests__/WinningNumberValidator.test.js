import {
  validateWinningNumber,
  validateWinningNumberSeparator,
} from '../src/utils/WinningNumberValidator.js';
import { ERROR_MESSAGE } from '../src/utils/Constants.js';

describe('WinningNumberValidator 테스트', () => {
  describe('validateWinningNumberSeparator', () => {
    test('당첨 번호 구분자가 쉼표(,)가 아닌 문자(.) 포함 시 에러 발생', () => {
      const input = '1,2,3.4,5,6';
      expect(() => validateWinningNumberSeparator(input)).toThrow(
        ERROR_MESSAGE.WINNING_NUMBER.SEPARATOR,
      );
    });

    test('당첨 번호에 숫자와 쉼표 외의 문자(a) 포함 시 에러 발생', () => {
      const input = '1,2,3,4,5,a';
      expect(() => validateWinningNumberSeparator(input)).toThrow(
        ERROR_MESSAGE.WINNING_NUMBER.SEPARATOR,
      );
    });

    test('유효한 쉼표 구분자 문자열 입력 시 에러가 발생하지 않음', () => {
      const input = '1,2,3,4,5,6';
      expect(() => validateWinningNumberSeparator(input)).not.toThrow();
    });
  });

  describe('validateWinningNumber', () => {
    test('배열에 NaN이 포함될 시 에러 발생 (from validateTypeNumberInStringArray)', () => {
      const input = [1, 2, 3, 4, 5, NaN];
      expect(() => validateWinningNumber(input)).toThrow(
        ERROR_MESSAGE.COMMON.TYPE,
      );
    });

    test('당첨 번호가 6개가 아닐 시 에러 발생 (from validateWinningNumberCount)', () => {
      const input = [1, 2, 3, 4, 5];
      expect(() => validateWinningNumber(input)).toThrow(
        ERROR_MESSAGE.WINNING_NUMBER.COUNT,
      );
    });

    test('당첨 번호가 중복될 시 에러 발생 (from validateWinningNumberDuplicate)', () => {
      const input = [1, 2, 3, 4, 5, 5];
      expect(() => validateWinningNumber(input)).toThrow(
        ERROR_MESSAGE.WINNING_NUMBER.DUPLICATE,
      );
    });

    test('당첨 번호 중 정수가 아닌 숫자가 있을 시 에러 발생 (from validateWinningNumberIsInteger)', () => {
      const input = [1, 2, 3, 4, 5, 5.5];
      // 해당 함수는 COMMON.RANGE 에러를 던지도록 구현되어 있습니다.
      expect(() => validateWinningNumber(input)).toThrow(
        ERROR_MESSAGE.COMMON.RANGE,
      );
    });

    test('당첨 번호가 1~45 범위를 벗어날 시 에러 발생 (from validateWinningNumberInRange)', () => {
      const input = [1, 2, 3, 4, 5, 46];
      expect(() => validateWinningNumber(input)).toThrow(
        ERROR_MESSAGE.COMMON.RANGE,
      );
    });

    test('유효한 당첨 번호 배열 입력 시 에러가 발생하지 않음', () => {
      const input = [1, 2, 3, 4, 5, 6];
      expect(() => validateWinningNumber(input)).not.toThrow();
    });
  });
});
