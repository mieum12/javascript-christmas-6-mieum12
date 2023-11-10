import MenuCategory from "./MenuCategory.js";

class DiscountData {
  /**
   * @type {number}
   */
  #christmasDiscountPrice = 0;
  /**
   * @type {number}
   */
  #starDayDiscountPrice=0;
  /**
   * @type {number}
   */
  #weekdayDiscountPrice = 0;
  /**
   * @type {number}
   */
  #weekendDiscountPrice = 0;
  /**
   * @type {number}
   */
  #giftEventPrice = 0;

  /**
   *
   */
  constructor() {}

  /**
   *
   * @return {number}
   */
  get christmasDiscountPrice() {
    return this.#christmasDiscountPrice;
  }
  /**
   *
   * @return {number}
   */
  get starDayDiscountPrice() {
    return this.#starDayDiscountPrice;
  }
  /**
   *
   * @return {number}
   */
  get weekdayDiscountPrice() {
    return this.#weekdayDiscountPrice;
  }
  /**
   *
   * @return {number}
   */
  get weekendDiscountPrice() {
    return this.#weekendDiscountPrice;
  }
  /**
   *
   * @return {number}
   */
  get giftEventPrice() {
    return this.#giftEventPrice;
  }

  /**
   * @param {number} dayOfMonth
   * @return {void}
   * @description 크리스마스 할인 금액을 날짜에 따라 적용한다
   */
  applyChristmasDiscountPriceByDay(dayOfMonth) {
    const discountAmount = 1_000 + 100 * (dayOfMonth - 1);
    this.#christmasDiscountPrice += discountAmount;
  }

  /**
   * @param {number} dayOfMonth
   * @param {string} category
   * @return {void}
   * @description 평일 할인은 (일-목요일+ 디저트메뉴)인 경우 메뉴당 2023원 할인
   */
  applyWeekDaysDiscountByCategoryAndDay(dayOfMonth, category) {
    // early return - if문 안에 중첩되지 안게 deepth를 줄임
    if (!this.#isWeekday(dayOfMonth)) {
      return;
    }
    if (category === MenuCategory.BEVERAGE) {
      this.#weekdayDiscountPrice += 2_023;
    }
  }

  /**
   *
   * @param {number} dayOfMonth
   * @return {boolean}
   */
  #isWeekday(dayOfMonth) {
    const date = new Date(2023, 12, dayOfMonth);
    // 0-6까지가 일-금을 나타냄
    // 5가 금이므로 5 미만이면 평일인 일-목이 됨
    return date.getDay() < 5;
  }
}
export default DiscountData;
