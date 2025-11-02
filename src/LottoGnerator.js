import { Random } from '@woowacourse/mission-utils';

/**
 * 주어진 로또 구매 수량에 따라 로또 번호를 생성 후 반환하는 함수
 * @param {number} purchaseCount - 로또 구매 수량
 * @returns {string[]} - 최종 로또 용지
 */
export default function LottoNumberGnerator(purchaseCount) {
  const totalLottoTickets = [];

  for (let i = 0; i < purchaseCount; i += 1) {
    const newNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    totalLottoTickets.push(newNumbers);
  }

  return totalLottoTickets;
}
