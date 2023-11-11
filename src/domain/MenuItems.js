import MenuItem from "./MenuItem.js";
import InputMenusError from "../exception/InputMenusError.js";
import MenuCategory from "./MenuCategory.js";

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
    const menuItems = menuItemsString.map((s) => new MenuItem(s));

    this.#menuItems = menuItems;

    this.#validateDuplicateMenuNames(menuItems);
    this.#validateCategory(menuItems);
    this.#validateQuantity(menuItems);
  }

  // =======================================================================================

  // TODO 잘 모르겠넹..
  get menuItems() {
    return this.#menuItems;
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

  // =======================================================================================

  /**
   * @param {MenuItem[]} menuItems
   * @return {number}
   * @description 메뉴들의 총 금액을 계산하는 로직
   */
  calculateTotalPrice() {
    // ["35_000", "60_000"]
    const price = this.#menuItems.map((m) => m.menu.price);
    // [ 35000, 60000 ]
    const numberArray = price.map((p) => parseInt(p.replace("_", "")));
    // 배열의 모든 수 더하기
    const sum = numberArray.reduce((acc, num) => acc + num, 0);
    return sum;
  }

  /**
   * @return {string[]}
   */
  makeMenuString() {
    const totalMenu = this.#menuItems.map((m) => {
      return `${m.name} ${m.quantity}개`;
    });

    console.log(totalMenu);
    return totalMenu;
    //✅[ "해산물파스타-2", "레드와인-1", "초코케이크-1" ]음
  }
}
export default MenuItems;
