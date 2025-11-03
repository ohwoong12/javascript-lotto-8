import { MissionUtils } from '@woowacourse/mission-utils';
import LottoGnerator from '../src/model/LottoGnerator.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('로또 생성 함수 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('로또 생성 함수 테스트', () => {
    const purchaseCount = 3;
    const expectedLottos = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
    ];

    mockRandoms(expectedLottos);

    const result = LottoGnerator(purchaseCount);

    expect(MissionUtils.Random.pickUniqueNumbersInRange).toHaveBeenCalledTimes(
      purchaseCount,
    );
    expect(result).toEqual(expectedLottos);
  });
});
