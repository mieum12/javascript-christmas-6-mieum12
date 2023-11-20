import RewardDetail from "../src/domain/RewardDetail.js";
import MenuItem from "../src/domain/MenuItem.js";
import Menu from "../src/domain/Menu.js";

describe("5가지 할인 관련 RewardDetatil 클래스 테스트", () => {
  test("1. 디데이 할인이 성공적으로 반영되고 있다.", async () => {
    //given
    const reward = new RewardDetail();
    const rewardDto = reward.makeRewardDetailDto();
    //when
    reward.applyDDayDiscountPriceByDay(3);
    //then
    expect(rewardDto.discountPrice.dDay).toBe(1_200);
  });

  test("2. 특별할인이 성공적으로 반영되고 있다.", async () => {
    // given
    const reward = new RewardDetail();
    const rewardDto = reward.makeRewardDetailDto();
    // when
    reward.applyStarDayDiscountByDay(10);
    // then
    expect(rewardDto.discountPrice.starDay).toBe(1_000);
  });

  test("3. 평일 할인이 성공적으로 반영되고 있다. ( 평일 + 디저트 )", async () => {
    // given
    const reward = new RewardDetail();
    const rewardDto = reward.makeRewardDetailDto();

    const menu = new MenuItem(Menu.아이스크림, "아이스크림", 1);
    // when
    reward.applyWeekDaysDiscountByCategoryAndDay(13, menu);
    // then
    expect(rewardDto.discountPrice.weekday).toBe(2_023);
  });

  test("4. 주말 할인이 성공적으로 반영되고 있다. ( 주말 + 메인 )", async () => {
    // given
    const reward = new RewardDetail();
    const rewardDto = reward.makeRewardDetailDto();
    const menu = new MenuItem(Menu.바비큐립, "바비큐립", 2);
    // when
    reward.applyWeekendsDiscountByCategoryAndDay(23, menu);
    // then
    expect(rewardDto.discountPrice.weekend).toBe(4_046);
  });

  test("5. 증정 이벤트로 인한 할인 금액이 성공적으로 반영되고 있다.", async () => {
    // given
    const reward = new RewardDetail();
    const rewardDto = reward.makeRewardDetailDto();
    const rewardItem = { name: "샴페인", price: 25_000, quantity: "1" };
    // when
    reward.applyGiftEventByTotalPrice(rewardItem.price);
    // then
    expect(rewardDto.discountPrice.giftEvent).toBe(25_000);
  });
});
