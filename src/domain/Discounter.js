import DiscountData from "./DiscountData.js";

/**
 * @description 할인을 담당하는 객체
 */
class Discounter {
  /**
   * @type {DiscountData}
   * @description 할인 결과를 담아서 저장할 객체(아웃풋)
   *   자동으로 만들어준다
   */
  #discountData = new DiscountData();

  // 할인을 위해 총금액, 날짜, 모든 메뉴가 필요하다(인풋)
  // 할인에 필요한 모든 데이터를 가져오는 것
  // 인자로 넘길 필요가 없어서 관리
  // 나중에 데이터가 많아지면 context라고하는 객체로 관리한다
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
   */
  constructor(totalPrice, day, menuItems) {
    this.#totalPrice = totalPrice;
    this.#day = day;
    this.#menuItems = menuItems;
  }

  /**
   * @return {void}
   * @description 모든 할인 정책을 적용한다 (아래의 모든 할인 메소드 호출)
   *
   * 멤버 변수가 있으니까 인자로 전달안해도됨
   */
  discountAll() {
    this.#discountChristmas();
    this.#discountWeekDays();
  }

  /**
   *
   * @return {DiscountData}
   */
  get discountData() {
    return this.#discountData;
  }

  /**
   * @description 1. 크리스마스 디데이 할인
   *
   * 총 금액에 대해 한번만 할인하면 됨
   */
  #discountChristmas() {
    const dayOfMonth = this.#day.day;

    //크리스마스기간에 할인 적용: discountData에서 할인 적용해서 가져옴
    if (dayOfMonth <= 25) {
      this.#discountData.applyChristmasDiscountPriceByDay(dayOfMonth);
    }
  }

  /**
   * @description 2. 특별 할인 적용
   *
   * 날짜 필요(총 금액 - 1_000원)
   */
  #discountStarDays(){

  }

  /**
   * @description 3. 평일 할인 적용
   *
   * 모든 메뉴에 대해서 검증(카테고리가 디저트인 경우, 개당 - 2_023원)
   */
  #discountWeekDays() {
    const dayOfMonth = this.#day.day;

    this.#menuItems.forEach(m => {
      this.#discountData.applyWeekDaysDiscountByCategoryAndDay(
        dayOfMonth,
        m.menu.category,
      );
    });
  }

  /**
   * @description 4. 주말 할인 적용
   *
   * 모든 메뉴에 대해서 검증(카테고리가 메인인 경우, 개당 - 2_023원)
   */
  #discountWeekends(){}
  /**
   * @description 5. 증정할인
   *
   * 총금액 120_000 이상이면 샴페인 1개 증정
   */
  #giftChampagneEvent(){}
}
export default Discounter;
