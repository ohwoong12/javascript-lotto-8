import Lotto from '../src/model/Lotto.js';
import { Console } from '@woowacourse/mission-utils';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성

  jest.mock('../src/utils/Constants.js', () => ({
    RANK: {
      MATCH_COUNT: {
        FIRST: 6,
        SECOND_OR_THIRD: 5,
        FOURTH: 4,
        FIFTH: 3,
      },
      RANK: {
        FIRST: 1,
        SECOND: 2,
        THIRD: 3,
        FOURTH: 4,
        FIFTH: 5,
      },
    },
  }));

  // 의존성(Console) 모킹
  // Console.print가 실제로 터미널에 로그를 찍지 않도록 가짜 함수로 대체
  const mockPrint = jest.spyOn(Console, 'print');
  mockPrint.mockImplementation(() => {});

  describe('Lotto 클래스 테스트', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    describe('showFinalResult (등수 계산) 테스트', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;

      test('6개 번호가 모두 일치하면 1등(1)을 반환한다', () => {
        // given
        const myLotto = new Lotto([1, 2, 3, 4, 5, 6]);
        // when
        const rank = myLotto.showFinalResult(winningNumbers, bonusNumber);
        // then
        expect(rank).toBe(1);
      });

      test('5개 번호와 보너스 번호가 일치하면 2등(2)을 반환한다', () => {
        // given
        const myLotto = new Lotto([1, 2, 3, 4, 5, 7]);
        // when
        const rank = myLotto.showFinalResult(winningNumbers, bonusNumber);
        // then
        expect(rank).toBe(2);
      });

      test('5개 번호만 일치하고 보너스 번호가 다르면 3등(3)을 반환한다', () => {
        // given
        const myLotto = new Lotto([1, 2, 3, 4, 5, 8]);
        // when
        const rank = myLotto.showFinalResult(winningNumbers, bonusNumber);
        // then
        expect(rank).toBe(3);
      });

      test('4개 번호가 일치하면 (보너스 여부 관계없이) 4등(4)을 반환한다', () => {
        // given
        const myLottoWithBonus = new Lotto([1, 2, 3, 4, 7, 8]);
        const myLottoWithoutBonus = new Lotto([1, 2, 3, 4, 8, 9]);
        // when
        const rank1 = myLottoWithBonus.showFinalResult(
          winningNumbers,
          bonusNumber,
        );
        const rank2 = myLottoWithoutBonus.showFinalResult(
          winningNumbers,
          bonusNumber,
        );
        // then
        expect(rank1).toBe(4);
        expect(rank2).toBe(4);
      });

      test('3개 번호가 일치하면 (보너스 여부 관계없이) 5등(5)을 반환한다', () => {
        // given
        const myLotto = new Lotto([1, 2, 3, 8, 9, 10]);
        // when
        const rank = myLotto.showFinalResult(winningNumbers, bonusNumber);
        // then
        expect(rank).toBe(5);
      });

      test('2개 이하의 번호가 일치하면 0 (꽝)을 반환한다', () => {
        // given
        const myLotto2 = new Lotto([1, 2, 8, 9, 10, 11]);
        const myLotto1 = new Lotto([1, 8, 9, 10, 11, 12]);
        const myLotto0 = new Lotto([10, 11, 12, 13, 14, 15]);
        // when
        const rank2 = myLotto2.showFinalResult(winningNumbers, bonusNumber);
        const rank1 = myLotto1.showFinalResult(winningNumbers, bonusNumber);
        const rank0 = myLotto0.showFinalResult(winningNumbers, bonusNumber);
        // then
        expect(rank2).toBe(0);
        expect(rank1).toBe(0);
        expect(rank0).toBe(0);
      });
    });

    describe('printLottoNumbers (출력) 테스트', () => {
      test('Lotto 번호를 형식에 맞게 출력해야 한다', () => {
        // given
        const numbers = [8, 21, 23, 41, 42, 43];
        const lotto = new Lotto(numbers);

        // when
        lotto.printLottoNumbers();

        // then
        // 1번 호출되었는지 검증
        const expectedOutput = '[8, 21, 23, 41, 42, 43]';
        expect(mockPrint).toHaveBeenCalledTimes(1);
        expect(mockPrint).toHaveBeenCalledWith(expectedOutput);
      });
    });
  });
});
