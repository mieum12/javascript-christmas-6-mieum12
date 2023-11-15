class RewardDetailDto {
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

  constructor(
    dDayDiscountPrice,
    starDayDiscountPrice,
    weekdayDiscountPrice,
    weekendDiscountPrice,
    giftEventPrice,
    totalRewardPrice,
  ) {
    this.#dDayDiscountPrice = dDayDiscountPrice;
    this.#starDayDiscountPrice = starDayDiscountPrice;
    this.#weekdayDiscountPrice = weekdayDiscountPrice;
    this.#weekendDiscountPrice = weekendDiscountPrice;
    this.#giftEventPrice = giftEventPrice;
    this.#totalRewardPrice = totalRewardPrice;
  }

  /**
   *
   * @return {number}
   */
  get dDayDiscountPrice() {
    return this.#dDayDiscountPrice;
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
   *
   * @return {number}
   */
  get totalRewardPrice() {
    return this.#totalRewardPrice;
  }
}

export default RewardDetailDto;
