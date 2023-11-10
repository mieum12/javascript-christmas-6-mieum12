import InputDateError from "../exception/InputDateError.js";

/**
 * @description
 * 입력받은 방문할 날짜(일)를 정하기 위한 클래스
 */
export class Day {
  /**
   *
   * @type {number}
   */
  static MIN_DAY = 1;
  /**
   *
   * @type {number}
   */
  static MAX_DAY = 31;
  /**
   * @type {number}
   */
  #day;

  /**
   *
   * @param {number} day
   */
  constructor(day) {
    this.#validateDayRange(day);
    this.#day = day;
  }

  /**
   *
   * @return {number}
   */
  get day() {
    return this.#day;
  }

  /**
   * @param {number} day
   * @return {void}
   * @description 유효한 날짜 범위인 숫자가 들어오는을지 검증 (비즈니스 요구사항의 검증은 여기서)
   *
   */
  #validateDayRange(day) {
    // 1-31 사이인지 검증
    if (day < Day.MIN_DAY || day > Day.MAX_DAY) {
      throw new InputDateError();
    }
    //
  }
}
