class PriceDetailDto {
  /**
   * @type {number}
   */
  #totalPrice;
  /**
   * @type {number}
   */
  #totalRewardPrice;
  /**
   * @type {number}
   */
  #finalPayment;
  /**
   *
   * @param {number} totalPrice
   * @param {number} totalRewardPrice
   * @param {number} finalPayment
   */
  constructor(totalPrice, totalRewardPrice, finalPayment) {
    this.#totalPrice = totalPrice;
    this.#totalRewardPrice = totalRewardPrice;
    this.#finalPayment = finalPayment;
  }

  get totalPrice() {
    return this.#totalPrice;
  }

  get totalRewardPrice() {
    return this.#totalRewardPrice;
  }

  get finalPayment() {
    return this.#finalPayment;
  }
}

export default PriceDetailDto;
