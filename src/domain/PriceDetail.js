import PriceDetailDto from "./dto/PriceDetailDto.js";

/**
 * @description 금액과 관련된 데이터(총금액, 혜택금액, 결제금액)를 갖고있는 클래스
 */
class PriceDetail {
  /**
   * @type {number}
   */
  #totalPrice;
  /**
   * @type {number}
   */
  #totalRewardPrice;

  /**
   *
   * @param {number} totalPrice
   */
  constructor(totalPrice) {
    this.#totalPrice = totalPrice;
    this.#totalRewardPrice = 0;
  }

  /**
   * @return {number}
   */
  get totalPrice() {
    return this.#totalPrice;
  }

  /**
   * @return {number}
   * @description
   */
  get totalRewardPrice() {
    return this.#totalRewardPrice;
  }

  /**
   * @return {number}
   */
  get finalPayment() {
    return this.#totalPrice - this.#totalRewardPrice;
  }

  /**
   * @return {PriceDetailDto}
   */
  makePriceDetailDto() {
    return new PriceDetailDto(
      this.#totalPrice,
      this.totalRewardPrice, // [에러] undefined
      this.finalPayment,
    );
  }
}

// final payment를 처음에 필드에 넣고 setter로 만들었는데
// this.#finalPayment = this.#totalPrice - this.#totalRewardPrice;
// 그 값은 total price가 필요한 값이라 그 값이 바뀔때마다 동기화되어야하는데
// 그렇게 되면 너무 복잡해진다, 두개 다 바꿔야해서 실수할 가능성도 생긴다
// 외부에서 코드 내부의 구현을 알아야한다
// 그래서 setter를 지우고 getter를 finalPayment를 만들어서
// 안에서 바뀌는 값을 가지고 밖에서 쓸 수 있게 한다

export default PriceDetail;
