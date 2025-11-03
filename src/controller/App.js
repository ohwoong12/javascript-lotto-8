import LottoController from './LottoController.js';

class App {
  async run() {
    const lottoController = new LottoController();
    await lottoController.start();
  }
}

export default App;
