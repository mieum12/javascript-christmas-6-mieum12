import { Console } from "@woowacourse/mission-utils";
import { InputValidator } from "./InputValidator.js";
import { Day } from "../domain/Day.js";
import MenuItems from "../domain/MenuItems.js";
import Order from "../domain/Order.js";

const HELLO_MESSAGE = "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.";
const READ_DATE_MESSAGE =
  "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n";
const READ_MENUS_MESSAGE =
  "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n";

const InputView = {
    /**
     *
     * @return {Promise<Order>}
     * @description 방문 날짜 및 구매할 메뉴흫 입력받아 하나의 주문으로 엮어준다
     *
     * order에 주문 일짜와 구매 메뉴들이 존재한다
     */
    async readOrder() {
        Console.print(HELLO_MESSAGE);
        const day = await this.retryIfError(this.readDate);
        const menuItems = await this.retryIfError(this.readMenus);

        return new Order(day, menuItems);
    },

    /**
     *
     * @return {Promise<Day>}
     * @description 방문 날짜를 사용자로부터 입력받고 입력 검증 및 숫자 변환 후, 비즈니스 요구사항 검증 후 도메인 객체 변환
     */
    async readDate() {
        /**
         * @type {string}
         */
        const input = await Console.readLineAsync(READ_DATE_MESSAGE);
        // 검증
        InputValidator.validateDateInput(input);
        // 변환
        const day = Number(input);

        return new Day(day);
    },

    /**
     *
     * @return {Promise<MenuItems>}
     * @description
     *
     * '메뉴명-개수' 형태릐 문자열을 입력 받아서 형식 검증을 한 뒤
     *  MenuItems으로 변환(일급 컬렉션)
     */
    async readMenus() {
        /**
         * @type {string}
         */
        const input = await Console.readLineAsync(READ_MENUS_MESSAGE);
        // 메뉴 형식 검증
        InputValidator.validateMenusInput(input);
        // 문자열 형태로 넣
        return new MenuItems(input);
    },
    /**
     *
     * @param callback
     * @return {Promise<void>}
     * @description 입력 에러시 해당 부분부터 재실행
     */
    async retryIfError(callback) {
        while (true) {
            try {
                // 성공하면 그대로 리턴
                return await callback();
            } catch (e) {
                // 실패하면 에러 찍고 다시 while문 또 돌것이다!
                Console.print(`${e.message}`);
            }
        }
    },
};

export default InputView;
