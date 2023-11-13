import OutputView from "../view/OutputView.js";
import InputView from "../view/InputView.js";

export class Controller {
  async start() {
    // 1. 주문 생성(날짜 및 메뉴 입력): Order 생성
    const order = await InputView.readOrder();
    // 2. 할인 혜택 적용
    order.discount();
    // 3. 증정 메뉴 주기
    order.giveRewardItem();
    // 4. 이벤트 배지 주기
    order.giveEventBadge();
    // 5. 결과 출력
    const orderDto = order.makeOrderDto();
    OutputView.printOrderDto(orderDto);
  }
}
