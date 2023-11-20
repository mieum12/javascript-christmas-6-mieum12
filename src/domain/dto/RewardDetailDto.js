class RewardDetailDto {
  #discountPrice;

  constructor(discountPrice) {
    this.#discountPrice = discountPrice;
  }

  /**
   *
   * @return {Object}
   */
  get discountPrice() {
    return this.#discountPrice;
  }
}

export default RewardDetailDto;
