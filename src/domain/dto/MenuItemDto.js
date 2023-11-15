import Menu from "../Menu.js";

class MenuItemDto {
  #menu;
  /**
   * @types {string}
   */
  #name;
  /**
   * @types {number}
   */
  #quantity;

  /**
   * @param menu
   * @param {string} name
   * @param {number} quantity
   */
  constructor(menu, name, quantity) {
    this.#menu = Menu[name];
    this.#name = name;
    this.#quantity = quantity;
  }

  get menu() {
    return this.#menu;
  }
  /**
   *
   * @return {string}
   */
  get name() {
    return this.#name;
  }

  /**
   *
   * @return {number}
   */
  get quantity() {
    return this.#quantity;
  }
}

export default MenuItemDto;
