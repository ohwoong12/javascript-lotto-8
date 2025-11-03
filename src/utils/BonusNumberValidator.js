import { ERROR_MESSAGE } from './Constants.js';
import {
  validateTypeNumber,
  validateNumberIsInteger,
  validateBonusNumberRange,
} from './CommonValidator.js';

/**
 * 보너스 번호가 당첨 번호 배열에 이미 존재하는지 (중복되는지) 검사하는 함수
 * @param {number} bonusNumber - 보너스 번호
 * @param {number[]} winningNumber - 당첨 번호 배열
 */
function validateWinningNumberAndBounusNumberDuplicate(
  bonusNumber,
  winningNumber,
) {
  if (winningNumber.includes(Number(bonusNumber))) {
    throw new Error(ERROR_MESSAGE.BONUS_NUMBER.DUPLICATE);
  }
}

/**
 * 보너스 번호에 대한 유효성 검사를 진행하는 함수
 * - 보너스 번호가 숫자인지 검사
 * - 보너스 번호의 범위가 1~45인지 검사
 * - 당첨 번호와 보너스 번호가 중복되는 경우
 * @param {number} bonusNumber - 보너스 번호
 * @param {number[]} winningNumber - 당첨 번호가 담긴 배열
 */
export default function validateBonusNumber(bonusNumber, winningNumber) {
  validateTypeNumber(bonusNumber);
  validateNumberIsInteger(bonusNumber);
  validateBonusNumberRange(bonusNumber);
  validateWinningNumberAndBounusNumberDuplicate(bonusNumber, winningNumber);
}
