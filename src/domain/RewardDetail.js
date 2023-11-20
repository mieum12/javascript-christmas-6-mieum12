import RewardDetailDto from "./dto/RewardDetailDto.js";
import MenuCategory from "./MenuCategory.js";
/**
 * @description 할인과 관련된 데이터(5가지 할인)를 갖고있는 클래스
 */
class RewardDetail {
  /**
   * @type {number}
   */
  static WEEK_DISCOUNT_PRICE = 2_023;
  /**
   *
   * @type {number}
   */
  static D_DAY_DEFAULT_PRICE = 1_000;
  /**
   *
   * @type {number}
   */
  static D_DAY_DAILY_INCREASE_PRICE = 100;
  /**
   *
   * @type {number}
   */
  static STAR_DAY_DISCOUNT_PRICE = 1_000;

  /**
   * @type {Object}
   */
  #discountPrice;

  constructor() {
    this.#discountPrice = {
      dDay: 0,
      starDay: 0,
      weekday: 0,
      weekend: 0,
      giftEvent: 0,
      totalRewardPrice: 0,
    };
  }

  /**
   * @param {number} dayOfMonth
   * @return {void}
   * @description 1. 크리스마스 디데이 할인 금액을 날짜에 따라 적용한다
   */
  applyDDayDiscountPriceByDay(dayOfMonth) {
    const discountAmount =
      RewardDetail.D_DAY_DEFAULT_PRICE +
      RewardDetail.D_DAY_DAILY_INCREASE_PRICE * (dayOfMonth - 1);
    this.#discountPrice.dDay += discountAmount;
  }

  /**
   *
   * @param {number} dayOfMonth
   * @return {void}
   * @description 2. 특별할인은 매주 일요일이나 크리스마스 인 경우 1_000원 할인
   */
  applyStarDayDiscountByDay(dayOfMonth) {
    // 12월 인덱스는 11인것 주의
    const date = new Date(2023, 11, dayOfMonth);
    if (date.getDay() === 0 || dayOfMonth === 25) {
      this.#discountPrice.starDay += RewardDetail.STAR_DAY_DISCOUNT_PRICE;
    }
  }

  /**
   * @param {number} dayOfMonth
   * @param {MenuItem} menuItem
   * @return {void}
   * @description 3. 평일 할인은 (일-목요일+ 디저트메뉴)인 경우 메뉴당 2023원 할인
   */
  applyWeekDaysDiscountByCategoryAndDay(dayOfMonth, menuItem) {
    // early return - if문 안에 중첩되지 안게 deepth를 줄임
    if (
      !this.#isWeekday(dayOfMonth) &&
      menuItem.category === MenuCategory.DESSERT
    ) {
      this.#discountPrice.weekday +=
        menuItem.quantity * RewardDetail.WEEK_DISCOUNT_PRICE;
    }
  }

  /**
   *
   * @param {number} dayOfMonth
   * @param {MenuItem} menuItem
   * @return {void}
   * @description 4. 주말 할인은 (금토+메인메뉴)일 경우 메뉴 당 2_023원 할인
   */
  applyWeekendsDiscountByCategoryAndDay(dayOfMonth, menuItem) {
    if (
      this.#isWeekday(dayOfMonth) &&
      menuItem.category === MenuCategory.MAIN
    ) {
      this.#discountPrice.weekend +=
        menuItem.quantity * RewardDetail.WEEK_DISCOUNT_PRICE;
    }
  }

  /**
   * @param {number} rewardPrice
   * @description 5. 총금액 120_000 이상이면 샴페인(2만5천) 증정이벤트
   */
  applyGiftEventByTotalPrice(rewardPrice) {
    this.#discountPrice.giftEvent += rewardPrice;
  }

  /**
   *
   * @param {number} dayOfMonth
   * @return {boolean}
   * @description 평일인지 주말인지 판단하는 함수
   */
  #isWeekday(dayOfMonth) {
    // 12월 인덱스는 11인것 주의
    const date = new Date(2023, 12, dayOfMonth);
    // 0-6까지가 일-금을 나타냄
    // 5가 금이므로 5 미만이면 평일인 일-목이 됨
    return date.getDay() < 5;
  }

  /**
   *
   * @return {number}
   */
  get totalRewardPrice() {
    return (this.#discountPrice.totalRewardPrice =
      this.#discountPrice.dDay +
      this.#discountPrice.starDay +
      this.#discountPrice.weekday +
      this.#discountPrice.weekend +
      this.#discountPrice.giftEvent);
  }

  /**
   * @return {RewardDetailDto}
   * @description OrderDto에 전달할 (메뉴dto,혜택dto,금액dto) 중 하나인 혜택 DTO다
   */
  makeRewardDetailDto() {
    return new RewardDetailDto(this.#discountPrice);
  }
}

export default RewardDetail;
