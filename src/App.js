import { Controller } from "./controller/Controller.js";

class App {
  /**
   *
   * @return {Promise<void>}
   */
  async run() {
    await new Controller().start();
  }
}

export default App;