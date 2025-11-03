import {
  validateTypeNumber,
  validateInputBlank,
  validateNumberIsInteger,
  validateBonusNumberRange,
} from '../src/utils/CommonValidator.js';
import { ERROR_MESSAGE } from '../src/utils/Constants.js';

describe('CommonValidator 테스트', () => {
  describe('validateTypeNumber', () => {
    test('입력 값이 숫자가 아닐 시 에러 발생', () => {
      const input = '100j';
      expect(() => validateTypeNumber(input)).toThrow(
        `${ERROR_MESSAGE.COMMON.TYPE}\n`,
      );
    });

    test('입력 값이 공백일 시 에러 발생', () => {
      const input = ' ';
      expect(() => validateInputBlank(input)).toThrow(
        `${ERROR_MESSAGE.COMMON.TYPE}`,
      );
    });

    test('유효한 숫자 문자열 입력 시 에러가 발생하지 않음', () => {
      const input = '1000';
      expect(() => validateTypeNumber(input)).not.toThrow();
    });
  });

  describe('validateNumberIsInteger', () => {
    test('입력 값이 정수가 아닐 시 (실수) 에러 발생', () => {
      const input = 1000.5;
      expect(() => validateNumberIsInteger(input)).toThrow(
        ERROR_MESSAGE.COMMON.TYPE,
      );
    });

    test('유효한 정수 입력 시 에러가 발생하지 않음', () => {
      const input = 1000;
      expect(() => validateNumberIsInteger(input)).not.toThrow();
    });
  });

  describe('validateBonusNumberRange', () => {
    test('로또 번호가 1 미만일 시 에러 발생', () => {
      const input = 0;
      expect(() => validateBonusNumberRange(input)).toThrow(
        ERROR_MESSAGE.COMMON.RANGE,
      );
    });

    test('로또 번호가 45 초과일 시 에러 발생', () => {
      const input = 46;
      expect(() => validateBonusNumberRange(input)).toThrow(
        ERROR_MESSAGE.COMMON.RANGE,
      );
    });

    test('유효한 범위의 로또 번호 입력 시 에러가 발생하지 않음', () => {
      const input = 45;
      expect(() => validateBonusNumberRange(input)).not.toThrow();
    });
  });
});
