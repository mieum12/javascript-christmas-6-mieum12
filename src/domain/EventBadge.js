class EventBadge {
  /**
   * @type {string}
   */
  #name;

  /**
   * @type {number}
   */
  #minRewardPrice;

  /**
   * @param {string} name
   * @param {number} minRewardPrice
   */
  constructor(name, minRewardPrice) {
    this.#name = name;
    this.#minRewardPrice = minRewardPrice;
  }

  /**
   * @return {string}
   */
  get name() {
    return this.#name;
  }

  /**
   *
   * @return {number}
   */
  get minRewardPrice() {
    return this.#minRewardPrice;
  }

  static NONE = new EventBadge("없음", 0);
  static STAR = new EventBadge("별", 5_000);
  static TREE = new EventBadge("트리", 10_000);
  static SANTA = new EventBadge("산타", 20_000);

  /**
   * @param {number} rewardPrice
   * @return {EventBadge}
   */
  static from(rewardPrice) {
    return [
      // 순서 중요! 최소 금액보다 낮은, 가장 높은 배지로 주어져야하기 때문!
      // 예를 들면,
      // 혜택 금액(rewardPrice)이 4만원일때
      // 최소금액들(5천,만,이만원)과 비교했을 때 전부 크다
      // 그러면 전부가 필터링 되기 때문에
      // 가장 위에있는 '산타'가 인덱스 0번이 되고 그것이 반환 된다.
      EventBadge.SANTA,
      EventBadge.TREE,
      EventBadge.STAR,
      EventBadge.NONE,
    ].filter((e) => e.minRewardPrice <= rewardPrice)[0];
  }
}

export default EventBadge;
