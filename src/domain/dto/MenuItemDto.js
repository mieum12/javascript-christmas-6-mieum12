import menu from "../Menu.js";

class MenuItemDto {
  #menu;
  #name;
  #price;

  constructor(menu, name, price) {
    this.#menu = menu;
    this.#name = name;
    this.#price = price;
  }

  get menu() {
    return this.#menu;
  }

  get name() {
    return this.#name;
  }

  get price() {
    return this.#price;
  }
}

export default MenuItemDto;
