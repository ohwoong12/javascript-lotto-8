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
}
export default Lotto;
