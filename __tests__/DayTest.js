import { Day } from "../src/domain/Day.js";

describe("Day 클래스 테스트", () => {
  test("성공적으로 Day의 정보를 저장한 클래스를 생성할 수 있다", async () => {
    const input = 25;
    const day = new Day(input);
    expect(day.day).toBe(25);
  });

  test("입력한 날짜가 1-31이 아니면 에러를 던진다", async () => {
    expect(() => {
      new Day(40);
    }).toThrow("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
  });
});
