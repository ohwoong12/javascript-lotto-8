import { Random } from '@woowacourse/mission-utils';
import sortLotto from './SortLotto.js';
import Lotto from './Lotto.js';

/**
 * 정렬된 6개의 로또 번호를 가진 Lotto 객체 1개를 생성하는 함수
 * @returns {Lotto} - Lotto 객체 1개
 */
function createSingleLottoTicket() {
  const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);

  const sortedLottoNumbers = sortLotto(lottoNumbers);

  return new Lotto(sortedLottoNumbers);
}

/**
 * 주어진 로또 구매 수량에 따라 Lotto 객체 배열을 생성 후 반환하는 함수
 * @param {number} purchaseCount - 로또 구매 수량
 * @returns {Lotto[]} - 로또 객체 배열
 */
export default function LottoNumberGnerator(purchaseCount) {
  const totalLottoTickets = [];

  for (let i = 0; i < purchaseCount; i += 1) {
    totalLottoTickets.push(createSingleLottoTicket());
  }

  return totalLottoTickets;
}
