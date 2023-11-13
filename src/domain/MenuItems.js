import MenuItem from "./MenuItem.js";
import InputMenusError from "../exception/InputMenusError.js";
import MenuCategory from "./MenuCategory.js";
import MenuItemDto from "./dto/MenuItemDto.js";
class MenuItems {
  /**
   *
   * @type {number}
   */
  static MAX_TOTAL_QUANTITY = 20;

  /**
   * @type {MenuItem[]}
   */
  #menuItems;

  /**
   *
   * @param {string} input
   */
  constructor(input) {
    // ['메뉴-1','메뉴-3' ...]
    const menuItemsString = input.split(",");
    // 메뉴-1 하나가 메뉴아이템
    // [MenuItem, MenuItem,MenuItem...]
    const menuItems = menuItemsString.map((s) => MenuItem.fromInput(s)); //정적팩토리메서드

    this.#menuItems = menuItems;

    this.#validateDuplicateMenuNames(menuItems);
    this.#validateCategory(menuItems);
    this.#validateQuantity(menuItems);
  }

  // =======================================================================================

  /**
   * @return {number}
   */
  get totalPrice() {
    return this.#menuItems
      .map((m) => m.price)
      .reduce((sum, price) => sum + price, 0);
  }
  /**
   *
   * @return {MenuItem[]}
   */
  get menuItems() {
    return this.#menuItems;
  }
  /**
   * @return {MenuItemDto[]}
   */
  makeMenuItemsDto() {
    console.log(88888888);
    return this.#menuItems.map((m) => {
      return new MenuItemDto(m.name, m.quantity);
    });
  }
  /**
   *
   * @param {MenuItem[]} menuItems
   * @return {void}
   * @description 중복 메뉴명인지 검증
   */
  #validateDuplicateMenuNames(menuItems) {
    const menuNames = menuItems.map((m) => m.name);
    const size = new Set(menuNames).size;

    if (size < menuItems.length) {
      throw new InputMenusError();
    }
  }

  /**
   * @param {MenuItem[]} menuItems
   * @return {void}
   * @description 음료만 구매할 수 없으므로 검증
   */
  #validateCategory(menuItems) {
    const menuCategories = menuItems.map((m) => m.menu.category);
    const uniqueMenuCategories = new Set(menuCategories);
    if (
      uniqueMenuCategories.size === 1 &&
      uniqueMenuCategories.has(MenuCategory.BEVERAGE)
    ) {
      throw new InputMenusError();
    }
  }

  /**
   * @param {MenuItem[]} menuItems
   * @return {void}
   * @description 총개수가 20을 넘길 수 없으므로 검증
   */
  #validateQuantity(menuItems) {
    const totalQuantity = menuItems.reduce((totalQuantity, m) => {
      return totalQuantity + m.quantity;
    }, 0);
    if (totalQuantity > MenuItems.MAX_TOTAL_QUANTITY) {
      throw new InputMenusError();
    }
  }
}
export default MenuItems;
