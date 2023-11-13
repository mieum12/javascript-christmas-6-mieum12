class MenuItemDto {
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
  /**
   * @types {string}
   */
  #name;
  /**
   * @types {number}
   */
  #quantity;

  /**
   * @param {string} name
   * @param {number} quantity
   */
  constructor(name, quantity) {
    this.#name = name;
    this.#quantity = quantity;
  }
}

export default MenuItemDto;
