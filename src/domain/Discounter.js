/**
 * @description 할인을 담당하는 객체
 */
class Discounter {
  /**
   * @type {number}
   */
  static MINIMUM_TOTAL_PRICE = 10_000;

  /**
   * @type {RewardDetail}
   */
  #rewardDetail;

  /**
   * @type {number}
   */
  #totalPrice;
  /**
   * @type {Day}
   */
  #day;
  /**
   * @type {MenuItem[]}
   */
  #menuItems;

  /**
   *
   * @param {number} totalPrice
   * @param {Day} day
   * @param {MenuItem[]} menuItems
   * @param {RewardDetail} rewardDetail
   */
  constructor(totalPrice, day, menuItems, rewardDetail) {
    this.#totalPrice = totalPrice;
    this.#day = day;
    this.#menuItems = menuItems;
    this.#rewardDetail = rewardDetail;
  }

  // 할인을 위해 총금액, 날짜, 모든 메뉴가 필요하다(인풋)
  // 할인에 필요한 모든 데이터를 가져오는 것
  // 인자로 넘길 필요가 없어서 관리
  // 나중에 데이터가 많아지면 context라고하는 객체로 관리한다

  /**
   * @return {void}
   * @description 모든 할인 정책을 적용한다 (아래의 모든 할인 메소드 호출)
   *
   * 멤버 변수가 있으니까 인자로 전달안해도됨
   */
  discountAll() {
    // totalPrice가 10_000 이하면 모든 할인이 적용되지 않는다.
    if (this.#totalPrice >= Discounter.MINIMUM_TOTAL_PRICE) {
      this.#discountDDay();
      this.#discountStarDays();
      this.#discountWeekDays();
      this.#discountWeekends();
    }
  }

  /**
   * @description 1. 크리스마스 디데이 할인
   *
   * 총 금액에 대해 한번만 할인하면 됨
   */
  #discountDDay() {
    const dayOfMonth = this.#day.day;
    //크리스마스기간에 할인 적용: RewardDetail에서 할인 적용해서 가져옴
    if (dayOfMonth <= 25) {
      this.#rewardDetail.applyDDayDiscountPriceByDay(dayOfMonth);
    }
  }

  /**
   * @description 2. 특별 할인 적용
   *
   * 날짜 필요(총 금액 - 1_000원)
   */
  #discountStarDays() {
    const dayOfMonth = this.#day.day;
    this.#rewardDetail.applyStarDayDiscountByDay(dayOfMonth);
  }

  /**
   * @description 3. 평일 할인 적용
   *
   * 모든 메뉴에 대해서 검증(카테고리가 디저트인 경우, 개당 - 2_023원)
   */
  #discountWeekDays() {
    const dayOfMonth = this.#day.day;

    this.#menuItems.forEach((m) => {
      this.#rewardDetail.applyWeekDaysDiscountByCategoryAndDay(
        dayOfMonth,
        m.category,
      );
    });
  }

  /**
   * @description 4. 주말 할인 적용
   *
   * 모든 메뉴에 대해서 검증(카테고리가 메인인 경우, 개당 - 2_023원)
   */
  #discountWeekends() {
    const dayOfMonth = this.#day.day;

    this.#menuItems.forEach((m) => {
      this.#rewardDetail.applyWeekendsDiscountByCategoryAndDay(
        dayOfMonth,
        m.category,
      );
    });
  }
}
export default Discounter;
