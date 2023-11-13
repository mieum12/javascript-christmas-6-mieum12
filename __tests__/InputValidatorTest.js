import { InputValidator } from "../src/view/InputValidator.js";

describe("클래스 테스트", () => {
  test("입력한 날짜가 숫자가 아닌 경우", async () => {
    const input = "이브";
    try {
      InputValidator.validateDateInput(input);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe(
        "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
      );
    }
  });
  test("입력한 '메뉴명-수량'의 포멧이 아닌 경우", async () => {
    const input = "타파스1개주세요";
    try {
      InputValidator.validateMenusInput(input);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe(
        "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
      );
    }
  });
});
