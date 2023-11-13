// 구매할 메뉴 종류 이름 수량
import Menu from "./Menu.js";
import InputMenusError from "../exception/InputMenusError.js";
import MenuItemDto from "./dto/MenuItemDto.js";

/**
 * @description - 사용자의 `메뉴-수량` 입력값을 받아 저장하는 클래스
 */
class MenuItem {
  static MIN_QUANTITY = 1;

  #menu;
  /**
   * @type {string}
   */
  #name;
  /**
   * @type {number}
   */
  #quantity;

  /**
   *
   * @param  {string} input
   * @return {MenuItem}
   * @description 정적 팩토리 메서드 추가
   */
  static fromInput(input) {
    const { menu, menuName, quantity } = MenuItem.#convertInput(input);
    return new MenuItem(menu, menuName, quantity);
  }

  /**
   *
   * @param {any} menu
   * @param {string} menuName
   * @param {number} quantity
   */
  constructor(menu, menuName, quantity) {
    this.#menu = menu;
    // 이렇게 필요 없고 menu.name으로 getter를 통해 내보낼 수 있다.
    // this.#name = menuName;
    this.#quantity = quantity;
  }

  /**
   *
   * @return {string}
   * @description
   */
  get name() {
    return this.#menu.name;
  }

  /**
   *
   * @return {number}
   */
  get quantity() {
    return this.#quantity;
  }

  get menu() {
    return this.#menu;
  }

  /**
   * @return {number}
   */
  get price() {
    return this.#menu.price * this.#quantity;
  }

  /**
   */
  get category() {
    return this.#menu.category;
  }

  /**
   *
   * @param {string} input
   * @description 입력 검증 및 변환
   *
   * 여기도 static이어야한다 static에서 불러오기 때문
   */
  static #convertInput(input) {
    // ['메뉴','1'] -> 형식 검증에서 수량이 무조건 숫자인 것을 검증
    const chunks = input.split("-");
    const menuName = chunks[0]; // '레드와인
    const quantity = Number(chunks[1]); // 2
    this.#validateQuantity(quantity);
    this.#validateMenuName(menuName);
    const menu = Menu[menuName];

    return { menu, menuName, quantity };
  }

  /**
   * @return {MenuItemDto}
   */
  makeMenuItemDto() {
    return new MenuItemDto(this.#name, this.#quantity);
  }

  /**
   * @param{number}quantity
   * @description 메뉴의 수량이 최소 1개 이상인지
   * @return {void}
   */
  static #validateQuantity(quantity) {
    if (quantity < MenuItem.MIN_QUANTITY) {
      throw new InputMenusError();
    }
  }

  /**
   *
   * @param menuName
   * @description 존재하는 메뉴인지 검증
   */
  static #validateMenuName(menuName) {
    const menu = Menu[menuName];
    if (menu === undefined) {
      throw new InputMenusError();
    }
  }
}
export default MenuItem;
