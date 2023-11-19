import menuItems from "../MenuItems.js";
import priceDetail from "../PriceDetail.js";

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
   * @type {PriceDetailDto}
   */
  #priceDetail;

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
   * @param {PriceDetailDto} priceDetail
   * @param {EventBadge} eventBadge
   */
  constructor(
    day,
    menuItems,
    rewardDetail,
    rewardItem,
    priceDetail,
    eventBadge,
  ) {
    this.#day = day;
    this.#menuItems = menuItems;
    this.#rewardDetail = rewardDetail;
    this.#rewardItem = rewardItem;
    this.#priceDetail = priceDetail;
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
   * @return {PriceDetailDto}
   */
  get priceDetail() {
    return this.#priceDetail;
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
