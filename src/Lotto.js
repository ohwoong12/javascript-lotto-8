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
}
export default Lotto;
