import { ERROR_MESSAGE } from './Constants.js';

export function validateInputBlank(input) {
  if (!input || String(input).trim() === '') {
    throw new Error(ERROR_MESSAGE.COMMON.TYPE);
  }
}

/**
 * 입력값이 숫자인지 검사하는 함수
 * @param {string} value - 숫자 입력값
 */
export function validateTypeNumber(value) {
  if (Number.isNaN(Number(value))) {
    throw new Error(`${ERROR_MESSAGE.COMMON.TYPE}\n`);
  }
}

/**
 * 입력값이 정수인지 검사하는 함수
 * @param {number} value - 숫자 입력값
 */
export function validateNumberIsInteger(value) {
  if (!Number.isInteger(Number(value))) {
    throw new Error(ERROR_MESSAGE.COMMON.TYPE);
  }
}

/**
 * 로또 번호 1개가 1~45 범위 내에 있는지 검사하는 함수
 * @param {number} value - 로또 번호
 */
export function validateBonusNumberRange(bonusNumber) {
  if (bonusNumber <= 0 || bonusNumber > 45) {
    throw new Error(ERROR_MESSAGE.COMMON.RANGE);
  }
}
