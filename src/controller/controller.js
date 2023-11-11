import OutputView from "../view/OutputView.js";
import InputView from "../view/InputView.js";

export class Controller {
  async start() {
    //주문 생성(날짜 및 메뉴 입력): Order 생성
    const order = await InputView.readOrder();
    // 할인 혜택 적용
    // order.discount();
    // 결과 출력
    const orderDto = order.makeOrderDto();
    console.log("✅ orderDto는????", orderDto);
    OutputView.printOrderDto(orderDto);
  }
}
