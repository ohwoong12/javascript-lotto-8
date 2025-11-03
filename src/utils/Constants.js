export const CONSOLE_MESSAGE = {
  PURCHASE_MONEY: '구입금액을 입력해 주세요.',
  PURCHASE_AMOUNT: '개를 구매했습니다.',
  CORRECT_NUMBER: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

export const WINNING_STATISTICS_MESSAGE = {
  WINNING_STATISTICS: '당첨 통계\n---',
  AMOUNT: '개',
  MATCH_THREE: '3개 일치 (5,000원) - ',
  MATCH_FOUR: '4개 일치 (50,000원) - ',
  MATCH_FIVE_NO_BONUS: '5개 일치 (1,500,000원) - ',
  MATCH_FIVE_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  MATCH_SIX: '6개 일치 (2,000,000,000원) - ',
};

export const LOTTO_CALCULATE_NUMBER = {
  PER_LOTTO_PRICE: 1000,
  FIRST_WIN_LOTTO: 2000000000,
  SECOND_WIN_LOTTO: 30000000,
  THIRD_WIN_LOTTO: 1500000,
  FOURTH_WIN_LOTTO: 50000,
  FIFTH_WIN_LOTTO: 5000,
};

export const RANKING_INFO = [
  {
    rank: 5,
    index: 5,
    message: `${WINNING_STATISTICS_MESSAGE.MATCH_THREE}`,
    prize: `${LOTTO_CALCULATE_NUMBER.FIFTH_WIN_LOTTO}`,
  },
  {
    rank: 4,
    index: 4,
    message: `${WINNING_STATISTICS_MESSAGE.MATCH_FOUR}`,
    prize: `${LOTTO_CALCULATE_NUMBER.FOURTH_WIN_LOTTO}`,
  },
  {
    rank: 3,
    index: 3,
    message: `${WINNING_STATISTICS_MESSAGE.MATCH_FIVE_NO_BONUS}`,
    prize: `${LOTTO_CALCULATE_NUMBER.THIRD_WIN_LOTTO}`,
  },
  {
    rank: 2,
    index: 2,
    message: `${WINNING_STATISTICS_MESSAGE.MATCH_FIVE_BONUS}`,
    prize: `${LOTTO_CALCULATE_NUMBER.SECOND_WIN_LOTTO}`,
  },
  {
    rank: 1,
    index: 1,
    message: `${WINNING_STATISTICS_MESSAGE.MATCH_SIX}`,
    prize: `${LOTTO_CALCULATE_NUMBER.FIRST_WIN_LOTTO}`,
  },
];

export const ERROR_MESSAGE = {
  PURCHASE: {
    // 구매 금액 관련
    UNIT: '[ERROR] 로또 구매 금액은 1,000원 단위로만 가능합니다.',
    RANGE: '[ERROR] 로또 구매 금액은 양의 정수만 가능합니다.',
  },
  WINNING_NUMBER: {
    // 당첨 번호 관련
    COUNT: '[ERROR] 당첨 번호가 6개만 입력 가능합니다.',
    DUPLICATE: '[ERROR] 당첨 번호는 중복이 불가능합니다.',
    SEPARATOR: '[ERROR] 쉼표 외에 구분자는 사용할 수 없습니다.',
  },
  BONUS_NUMBER: {
    // 보너스 번호 관련
    COUNT: '[ERROR] 보너스 번호는 1개만 입력 가능합니다.',
    DUPLICATE: '[ERROR] 당첨 번호와 보너스 번호는 중복이 불가능합니다.',
  },
  COMMON: {
    // 공통 에러
    TYPE: '[ERROR] 양의 정수만 입력 가능합니다.',
    RANGE: '[ERROR] 1~45의 양의 정수만 입력 가능합니다.',
  },
};
