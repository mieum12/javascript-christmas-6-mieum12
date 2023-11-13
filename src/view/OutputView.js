import { Console } from "@woowacourse/mission-utils";
const OutputView = {
  /**
   *
   * @param {OrderDto} orderDto
   */
  printOrderDto(orderDto) {
    this.printDay(orderDto);
    this.printAllMenus(orderDto);
    this.printTotalPrice(orderDto);
    this.printReward(orderDto);
    this.printDiscountDetail(orderDto);
    this.printTotalRewardPrice(orderDto);
    this.printFinalPayment(orderDto);
    this.printEventBadge(orderDto);
  },
  printDay(orderDto) {
    Console.print(
      `12월 ${orderDto.day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,
    );
  },
  printAllMenus(orderDto) {
    Console.print("<주문 메뉴>");
    const allMenu = orderDto.menuItems;
    allMenu.forEach((m) => {
      Console.print(`${m.name} ${m.quantity}개`);
    });
  },
  printTotalPrice(orderDto) {
    Console.print(`\n<할인 전 총주문 금액>`);
    Console.print(`${orderDto.priceDetail.totalPrice}원`);
  },
  printReward(orderDto) {
    Console.print(`\n<증정 메뉴>`);
    Console.print(
      `${orderDto.rewardItem.name} ${orderDto.rewardItem.quantity}개`,
    );
  },
  printDiscountDetail(orderDto) {
    Console.print(`\n<혜택 내역>`);
    const detail = orderDto.rewardDetail;

    const detailArray = [
      `크리스마스 디데이 할인: -${detail.dDayDiscountPrice}원`,
      `평일 할인: -${detail.weekdayDiscountPrice}원`,
      `주말 할인: -${detail.weekendDiscountPrice}원`,
      `특별 할인: -${detail.starDayDiscountPrice}원`,
      `증정 이벤트: -${detail.giftEventPrice}원`,
    ];

    detailArray.filter((d) => {
      // -0원이 아니면 출력하기!
      if (!d.includes("-0원")) {
        Console.print(d);
      }
    });
  },

  printTotalRewardPrice(orderDto) {
    Console.print(
      `\n<총혜택 금액>\n${orderDto.priceDetail.totalRewardPrice}원`,
    );
  },
  printFinalPayment(orderDto) {
    Console.print(
      `\n<할인 후 예상 결제 금액>\n${orderDto.priceDetail.finalPayment}원`,
    );
  },
  printEventBadge(orderDto) {
    Console.print(`\n<12월 이벤트 배지>\n${orderDto.eventBadge.name}`);
  },
};
export default OutputView;
