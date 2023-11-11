// 구매할 메뉴 종류 이름 수량
import Menu from "./Menu.js";
import InputMenusError from "../exception/InputMenusError.js";

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
   * @description MenuItem이 스스로 입력 검증 및 변환 책임을 가짐
   */
  constructor(input) {
    const { menu, menuName, quantity } = this.#convertInput(input);

    this.#menu = menu;
    this.#name = menuName;
    this.#quantity = quantity;
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

  get menu() {
    return this.#menu;
  }

  // =======================================================================================

  /**
   *
   * @param {string} input
   * @description 입력 검증 및 변환
   */
  #convertInput(input) {
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
   * @param{number}quantity
   * @description 메뉴의 수량이 최소 1개 이상인지
   * @return {void}
   */
  #validateQuantity(quantity) {
    if (quantity < MenuItem.MIN_QUANTITY) {
      throw new InputMenusError();
    }
  }

  /**
   *
   * @param menuName
   * @description 존재하는 메뉴인지 검증
   */
  #validateMenuName(menuName) {
    const menu = Menu[menuName];
    if (menu === undefined) {
      throw new InputMenusError();
    }
  }
}
export default MenuItem;
