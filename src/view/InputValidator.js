import InputDateError from "../exception/InputDateError.js";
import InputMenusError from "../exception/InputMenusError.js";

//메뉴 하나만 존재할 경우
const MENU_INPUT_REGEX_ONE = /^([가-힣]+-\d+)$/;
//메뉴 여러개가 존재할 경우
const MENU_INPUT_REGEX = /^([가-힣]+-\d+,)+([가-힣]+-\d+)$/;

export class InputValidator {
  /**
   * @param {string} input
   * @return {void}
   * @description static을 쓰면 객체명.메서드 그대로 쓸 수 있다. 객체 생성이 필요 없음!
   */
  static validateDateInput(input) {
    if (isNaN(Number(input))) {
      throw new InputDateError();
    }
  }

  /**
   *
   * @param {string} input
   * @return {void}
   * @description 입력 메뉴 형식 검증
   */
  static validateMenusInput(input) {
    if (!MENU_INPUT_REGEX_ONE.test(input) && !MENU_INPUT_REGEX.test(input)) {
      throw new InputMenusError();
    }
  }
}
