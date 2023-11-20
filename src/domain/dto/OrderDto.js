class OrderDto {
  /**
   * @type {number}
   */
  #day;
  /**
   * @type {MenuItemDto[]}
   */
  #menuItems;

  /**
   * @type {RewardDetailDto}
   */
  #rewardDetail;

  /**
   * @type {MenuItemDto}
   */
  #rewardItem;

  /**
   * @type {number}
   */
  #totalPrice;

  /**
   * @type {EventBadge}
   */
  #eventBadge;

  /**
   *
   * @param {number} day
   * @param {MenuItemDto[]} menuItems
   * @param {RewardDetailDto} rewardDetail
   * @param {MenuItemDto} rewardItem
   * @param {number} totalPrice
   * @param {EventBadge} eventBadge
   */
  constructor(
    day,
    menuItems,
    rewardDetail,
    rewardItem,
    totalPrice,
    eventBadge,
  ) {
    this.#day = day;
    this.#menuItems = menuItems;
    this.#rewardDetail = rewardDetail;
    this.#rewardItem = rewardItem;
    this.#totalPrice = totalPrice;
    this.#eventBadge = eventBadge;
  }

  /**
   *
   * @return {number}
   */
  get day() {
    return this.#day;
  }

  /**
   *
   * @return {MenuItemDto[]}
   */
  get menuItems() {
    return this.#menuItems;
  }

  /**
   *
   * @return {RewardDetailDto}
   */
  get rewardDetail() {
    return this.#rewardDetail;
  }

  /**
   *
   * @return {MenuItemDto}
   */
  get rewardItem() {
    return this.#rewardItem;
  }

  /**
   *
   * @return {number}
   */
  get totalPrice() {
    return this.#totalPrice;
  }

  /**
   *
   * @return {EventBadge}
   */
  get eventBadge() {
    return this.#eventBadge;
  }
}

export default OrderDto;
