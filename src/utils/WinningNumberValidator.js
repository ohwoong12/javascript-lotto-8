import { ERROR_MESSAGE } from './Constants.js';

/**
 * 당첨 번호 배열의 모든 숫자가 1~45 범위 내에 있는지 검사하는 함수
 * @param {number[]} array - 당첨 번호 배열
 */
function validateWinningNumberInRange(array) {
  function compareRange(element) {
    return element > 0 && element <= 45;
  }
  const result = array.every((val) => compareRange(val));
  if (!result) {
    throw new Error(ERROR_MESSAGE.COMMON.RANGE);
  }
}

/**
 * 배열의 모든 요소가 유효한 숫자인지(NaN이 아닌지) 검사하는 함수
 * @param {number[]} winningNumberArray - 숫자 배열 (NaN 포함 가능)
 */
function validateTypeNumberInStringArray(winningNumberArray) {
  if (!winningNumberArray.every((val) => !Number.isNaN(val))) {
    throw new Error(ERROR_MESSAGE.COMMON.TYPE);
  }
}

/**
 * 당첨 번호 배열의 개수가 6개인지 검사하는 함수
 * @param {number[]} winningNumberArray - 당첨 번호 배열
 */
function validateWinningNumberCount(winningNumberArray) {
  if (winningNumberArray.length !== 6) {
    throw new Error(ERROR_MESSAGE.WINNING_NUMBER.COUNT);
  }
}

/**
 * 당첨 번호 배열에 중복된 숫자가 있는지 검사하는 함수
 * @param {number[]} winningNumberArray - 당첨 번호 배열
 */
function validateWinningNumberDuplicate(winningNumberArray) {
  const uniqueNumbersArray = new Set(winningNumberArray);
  if (winningNumberArray.length !== uniqueNumbersArray.size) {
    throw new Error(ERROR_MESSAGE.WINNING_NUMBER.DUPLICATE);
  }
}

/**
 * 당첨 번호 배열의 모든 숫자가 정수인지 검사하는 함수
 * @param {number[]} array - 당첨 번호 배열
 */
function validateWinningNumberIsInteger(array) {
  if (!array.every((ele) => Number.isInteger(ele))) {
    throw new Error(ERROR_MESSAGE.COMMON.RANGE);
  }
}

/**
 * 당첨 번호 입력 문자열이 숫자와 쉼표(,)로만 구성되어 있는지 검사하는 함수
 * @param {string} string - 당첨 번호 입력 원본 문자열
 */
export function validateWinningNumberSeparator(string) {
  const regex = /^[0-9,]+$/;
  if (!regex.test(string)) {
    throw new Error(ERROR_MESSAGE.WINNING_NUMBER.SEPARATOR);
  }
}

/**
 * 당첨 번호에 대한 유효성 검사를 진행하는 함수
 * - 숫자가 입력되지 않은 경우
 * - 6개가 입력되지 않은 경우
 * - 중복된 숫자를 입력한 경우
 * - 당첨 번호가 1~45 사이의 범위인지 검사
 * - 구분자가 쉼표인지 검사
 * @param {number[]} winningNumberArray - 당첨 번호 배열
 */
export function validateWinningNumber(winningNumberArray) {
  validateTypeNumberInStringArray(winningNumberArray);
  validateWinningNumberCount(winningNumberArray);
  validateWinningNumberDuplicate(winningNumberArray);
  validateWinningNumberIsInteger(winningNumberArray);
  validateWinningNumberInRange(winningNumberArray);
}
