import RewardDetailDto from "./dto/RewardDetailDto.js";
import MenuCategory from "./MenuCategory.js";
/**
 * @description 할인과 관련된 데이터(5가지 할인)를 갖고있는 클래스
 */
class RewardDetail {
  /**
   * @type {number}
   */
  #dDayDiscountPrice;
  /**
   * @type {number}
   */
  #starDayDiscountPrice;
  /**
   * @type {number}
   */
  #weekdayDiscountPrice;
  /**
   * @type {number}
   */
  #weekendDiscountPrice;
  /**
   * @type {number}
   */
  #giftEventPrice;

  /**
   * @type {number}
   */
  #totalRewardPrice;

  /**
   *
   * @param {number} dDayDiscountPrice
   * @param {number} starDayDiscountPrice
   * @param {number} weekdayDiscountPrice
   * @param {number} weekendDiscountPrice
   * @param {number} giftEventPrice
   * @param {number} totalRewardPrice
   */
  constructor(
    dDayDiscountPrice = 0,
    starDayDiscountPrice = 0,
    weekdayDiscountPrice = 0,
    weekendDiscountPrice = 0,
    giftEventPrice = 0,
    totalRewardPrice = 0,
  ) {
    this.#dDayDiscountPrice = dDayDiscountPrice;
    this.#starDayDiscountPrice = starDayDiscountPrice;
    this.#weekdayDiscountPrice = weekdayDiscountPrice;
    this.#weekendDiscountPrice = weekendDiscountPrice;
    this.#giftEventPrice = giftEventPrice;
    this.#totalRewardPrice = totalRewardPrice;
  }

  get dDayDiscountPrice() {
    return this.#dDayDiscountPrice;
  }

  get starDayDiscountPrice() {
    return this.#starDayDiscountPrice;
  }

  get weekdayDiscountPrice() {
    return this.#weekdayDiscountPrice;
  }

  get weekendDiscountPrice() {
    return this.#weekendDiscountPrice;
  }

  get giftEventPrice() {
    return this.#giftEventPrice;
  }

  /**
   * @param {number} dayOfMonth
   * @return {void}
   * @description 1. 크리스마스 디데이 할인 금액을 날짜에 따라 적용한다
   */
  applyDDayDiscountPriceByDay(dayOfMonth) {
    const discountAmount = 1_000 + 100 * (dayOfMonth - 1);
    this.#dDayDiscountPrice += discountAmount;
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
      this.#starDayDiscountPrice += 1_000;
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
      this.#weekdayDiscountPrice += menuItem.quantity * 2_023;
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
      this.#weekendDiscountPrice += menuItem.quantity * 2_023;
    }
  }

  /**
   * @param {number} rewardPrice
   * @description 5. 총금액 120_000 이상이면 샴페인(2만5천) 증정이벤트
   */
  applyGiftEventByTotalPrice(rewardPrice) {
    this.#giftEventPrice += rewardPrice;
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
   * @return {number}
   * @description 총 혜택 금액을 계산하는 함수
   */
  calculateTotalRewardPrice() {
    return (this.#totalRewardPrice =
      this.#weekdayDiscountPrice +
      this.#weekendDiscountPrice +
      this.#starDayDiscountPrice +
      this.#dDayDiscountPrice +
      this.#giftEventPrice);
  }

  /**
   *
   * @return {number}
   */
  get totalRewardPrice() {
    return this.#totalRewardPrice;
  }

  /**
   * @return {RewardDetailDto}
   * @description OrderDto에 전달할 (메뉴dto,혜택dto,금액dto) 중 하나인 혜택 DTO다
   */
  makeRewardDetailDto() {
    return new RewardDetailDto(
      this.#dDayDiscountPrice,
      this.#starDayDiscountPrice,
      this.#weekdayDiscountPrice,
      this.#weekendDiscountPrice,
      this.#giftEventPrice,
      this.calculateTotalRewardPrice(),
    );
  }
}

export default RewardDetail;
