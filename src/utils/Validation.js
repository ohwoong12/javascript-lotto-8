export default function validateTypeNumber(ary) {
  const result = ary.every((val) => typeof val === 'number');

  if (result === false) {
    throw new Error('[ERROR] 숫자가 아님.');
  }
}

// 추후 추가 예정
