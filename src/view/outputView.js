import { Console } from '@woowacourse/mission-utils';

export function printLottoTicket(lottoObjects) {
  for (let i = 0; i < lottoObjects.length; i += 1) {
    lottoObjects[i].printLottoNumbers();
  }
  Console.print('');
}
