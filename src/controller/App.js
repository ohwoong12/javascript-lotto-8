import LottoController from './LottoController';

class App {
  async run() {
    const lottoController = new LottoController();
    await lottoController.start();
  }
}

export default App;
