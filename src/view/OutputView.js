import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  /**
   *
   * @param {OrderDto} orderDto
   * @description 모든 결과를 출력하는 함수
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
  /**
   *
   * @param orderDto
   * @description 사용자가 입력한 날짜 출력
   */
  printDay(orderDto) {
    Console.print(
      `12월 ${orderDto.day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,
    );
  },
  /**
   *
   * @param orderDto
   * @description 사용자가 입력한 주문 메뉴 전체 출력
   */
  printAllMenus(orderDto) {
    Console.print("<주문 메뉴>");
    const allMenu = orderDto.menuItems;
    allMenu.forEach((m) => {
      Console.print(`${m.name} ${m.quantity}개`);
    });
  },
  /**
   *
   * @param orderDto
   * @description 할인 전 총 주문금액 출력
   */
  printTotalPrice(orderDto) {
    Console.print(`\n<할인 전 총주문 금액>`);
    Console.print(`${orderDto.totalPrice.toLocaleString()}원`);
  },
  /**
   *
   * @param orderDto
   * @description 증정메뉴 출력, 없으면 없음 출력
   */
  printRewardItem(orderDto) {
    Console.print(`\n<증정 메뉴>`);
    if (orderDto.rewardItem.name === "없음") {
      Console.print("없음");
    } else {
      Console.print(
        `${orderDto.rewardItem.name} ${orderDto.rewardItem.quantity}개`,
      );
    }
  },
  /**
   *
   * @param orderDto
   * @description 혜택 내역별로 전부 출력, 없으면 없음 출력
   */
  printRewardDetail(orderDto) {
    Console.print(`\n<혜택 내역>`);
    const detailArray = [
      `크리스마스 디데이 할인: -${orderDto.rewardDetail.dDayDiscountPrice.toLocaleString()}원`,
      `평일 할인: -${orderDto.rewardDetail.weekdayDiscountPrice.toLocaleString()}원`,
      `주말 할인: -${orderDto.rewardDetail.weekendDiscountPrice.toLocaleString()}원`,
      `특별 할인: -${orderDto.rewardDetail.starDayDiscountPrice.toLocaleString()}원`,
      `증정 이벤트: -${orderDto.rewardDetail.giftEventPrice.toLocaleString()}원`,
    ];
    const resultArray = detailArray.filter((d) => !d.includes("-0원"));
    if (resultArray.length > 0) {
      resultArray.forEach((d) => Console.print(d));
    } else {
      Console.print("없음");
    }
  },
  /**
   *
   * @param orderDto
   * @description 총 혜택 금액 출력
   */
  printTotalRewardPrice(orderDto) {
    Console.print("\n<총혜택 금액>");

    Console.print(
      `-${orderDto.rewardDetail.totalRewardPrice.toLocaleString()}원`,
    );
    // [에러]
    // Console.print(`${orderDto.priceDetail.totalRewardPrice}원`);
  },
  /**
   *
   * @param orderDto
   * @description 최종 결제금액 출력
   */
  printFinalPayment(orderDto) {
    Console.print("\n<할인 후 예상 결제 금액>");
    Console.print(
      `${(
        orderDto.totalPrice - orderDto.rewardDetail.totalRewardPrice
      ).toLocaleString()}원`,
    );
  },
  /**
   *
   * @param orderDto
   * @description 이벤트 배지 출력
   */
  printEventBadge(orderDto) {
    Console.print("\n<12월 이벤트 배지>");
    Console.print(orderDto.eventBadge.name);
  },
};

export default OutputView;
