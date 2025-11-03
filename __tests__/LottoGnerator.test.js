import { MissionUtils } from '@woowacourse/mission-utils';
import LottoNumberGnerator from '../src/model/LottoGenerator.js';
import Lotto from '../src/model/Lotto.js';

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

  test('구매 수량만큼 Lotto 객체 배열을 생성해야 한다', () => {
    // 1. given
    const purchaseCount = 3;

    const mockedNumbers = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
    ];

    const expectedLottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
      new Lotto([13, 14, 15, 16, 17, 18]),
    ];

    mockRandoms(mockedNumbers);

    // 2. when
    const result = LottoNumberGnerator(purchaseCount);

    // 3. then
    expect(MissionUtils.Random.pickUniqueNumbersInRange).toHaveBeenCalledTimes(
      purchaseCount,
    );
    expect(result).toEqual(expectedLottos);
  });

  test('로또 번호가 정렬되어 생성되어야 한다', () => {
    // 1. given
    const purchaseCount = 2;

    const mockedNumbers = [
      [6, 5, 4, 3, 2, 1],
      [12, 11, 10, 9, 8, 7],
    ];

    const expectedLottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
    ];

    mockRandoms(mockedNumbers);

    // 2. when
    const result = LottoNumberGnerator(purchaseCount);

    // 3. then
    expect(result).toEqual(expectedLottos);
  });
});
