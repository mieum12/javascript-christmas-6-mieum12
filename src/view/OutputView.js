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
    this.printRewardItem(orderDto);
    this.printRewardDetail(orderDto);
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
  printRewardItem(orderDto) {
    Console.print(`\n<증정 메뉴>`);
    Console.print(
      `${orderDto.rewardItem.name} ${orderDto.rewardItem.quantity}개`,
    );
  },
  printRewardDetail(orderDto) {
    Console.print(`\n<혜택 내역>`);
    const detailArray = [
      `크리스마스 디데이 할인: -${orderDto.rewardDetail.dDayDiscountPrice}원`,
      `평일 할인: -${orderDto.rewardDetail.weekdayDiscountPrice}원`,
      `주말 할인: -${orderDto.rewardDetail.weekendDiscountPrice}원`,
      `특별 할인: -${orderDto.rewardDetail.starDayDiscountPrice}원`,
      `증정 이벤트: -${orderDto.rewardDetail.giftEventPrice}원`,
    ];
    const resultArray = detailArray.filter((d) => !d.includes("-0원"));
    if (resultArray.length > 0) {
      resultArray.forEach((d) => Console.print(d));
    } else {
      Console.print("없음");
    }
  },

  printTotalRewardPrice(orderDto) {
    Console.print("\n<총혜택 금액>");
    Console.print(`${orderDto.rewardDetail.totalRewardPrice}원`);
  },
  printFinalPayment(orderDto) {
    Console.print("\n<할인 후 예상 결제 금액>");
    Console.print(
      `${
        orderDto.priceDetail.totalPrice - orderDto.rewardDetail.totalRewardPrice
      }원`,
    );
  },
  printEventBadge(orderDto) {
    Console.print("\n<12월 이벤트 배지>");
    Console.print(orderDto.eventBadge.name);
  },
};

export default OutputView;
