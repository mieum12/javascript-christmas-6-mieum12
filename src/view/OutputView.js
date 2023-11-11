import { Console } from "@woowacourse/mission-utils";
import order from "../domain/Order.js";
import menuItems from "../domain/MenuItems.js";

const OutputView = {
  /**
   *
   * @param {OrderDto} order
   */
  printOrderDto(order) {
    this.printDay(order);
    this.printAllMenus(order);
    this.printTotalPrice(order);

    Console.print(`
<증정 메뉴>
${order.gift}

<혜택 내역>
${order.discountDetails}

<총혜택 금액>
${order.totalDiscount}

<할인 후 예상 결제 금액>
${order.finalPayment}

<12월 이벤트 배지>
${order.eventBadge}

`);
  },
  printDay(order) {
    Console.print(
      `12월 ${order.day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,
    );
  },

  printAllMenus(order) {
    Console.print("<주문 메뉴>");
    const allMenu = order.menuItems;
    allMenu.forEach((m) => {
      Console.print(m);
    });
  },
  printTotalPrice(order) {
    Console.print(`\n<할인 전 총주문 금액>`);
    Console.print(order.totalPrice);
  },
};
export default OutputView;
