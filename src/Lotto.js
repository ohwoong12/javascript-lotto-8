import { Console } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
    }
    if (numbers.every((ele) => typeof ele === 'number') !== true) {
      throw new Error('[ERROR] 숫자만 입력 가능');
    }
  }

  // TODO: 추가 기능 구현

  // 생성자를 통해 설정된 로또 번호를 출력하는 함수
  printLottoNumbers() {
    // Console.print(this.#numbers);
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  /**
   * 각 로또 1장마다 몇개의 번호가 당첨됐는지 비교하는 함수
   * @param {number[]} correctNumbers - 로또 당첨 번호가 담긴 배열
   * @returns {number} - 당첨된 번호의 개수
   */
  #compareOverlappingNumbers(correctNumbers) {
    const matchCount = this.#numbers.filter((ele) =>
      correctNumbers.includes(ele),
    ).length;

    return matchCount;
  }

  /**
   * 로또 구매 번호에 보너스 번호 포함 여부만 계산하여 반환하는 함수
   * @param {number[]} bonusNumber - 로또 보너스 번호가 담긴 배열
   * @returns {boolean}
   */
  #hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  /**
   * 당첨된 번호의 개수를 기반으로 등수를 산정하는 함수
   * @param {number[]} matchCount - 당첨된 번호의 개수가 담긴 배열
   * @param {boolean} bonusNumber - 보너스 번호 존재 여부
   * @returns
   */
  #calculateRank(matchCount, bonusNumber) {
    const hasBonusNumber = this.#hasBonusNumber(bonusNumber);
    if (matchCount === 6) {
      return 1;
    }
    if (matchCount === 5 && hasBonusNumber) {
      return 2;
    }
    if (matchCount === 5 && !hasBonusNumber) {
      return 3;
    }
    if (matchCount === 4) {
      return 4;
    }
    if (matchCount === 3) {
      return 5;
    }
    return 0;
  }

  /**
   * 당첨 번호와 보너스 번호를 받아, 현재 로또 티켓의 최종 등수를 반환하는 함수
   * @param {number[]} correctNumbers - 당첨 번호 6개가 담긴 배열
   * @param {number[]} bonusNumber - 보너스 번호 1개가 담긴 배열
   * @returns {number[]} - 정렬되지 않은 당첨 등수가 담긴 배열
   */
  showFinalResult(correctNumbers, bonusNumber) {
    const matchCount = this.#compareOverlappingNumbers(correctNumbers);

    const result = this.#calculateRank(matchCount, bonusNumber);

    return result;
  }
}
export default Lotto;
