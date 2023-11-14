import { ChristmasController } from "./controller/ChristmasController.js";

class App {
  /**
   *
   * @return {Promise<void>}
   */
  async run() {
    await new ChristmasController().start();
  }
}

export default App;
