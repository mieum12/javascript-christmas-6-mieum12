import EventBadge from "../src/domain/EventBadge.js";

describe("이벤트 배지 클래스 테스트", () => {
  test("성공적으로 Santa 배지를 얻을 수 있다", async () => {
    const rewardPrice = 50_000;
    const result = EventBadge.from(rewardPrice);
    expect(result.name).toBe("산타");
  });
  test("성공적으로 Tree 배지를 얻을 수 있다", async () => {
    const rewardPrice = 15_000;
    const result = EventBadge.from(rewardPrice);
    expect(result.name).toBe("트리");
  });
  test("성공적으로 Star 배지를 얻을 수 있다", async () => {
    const rewardPrice = 7_000;
    const result = EventBadge.from(rewardPrice);
    expect(result.name).toBe("별");
  });
  test("성공적으로 '없음'을 출력할 수 있다", async () => {
    const rewardPrice = 3_000;
    const result = EventBadge.from(rewardPrice);
    expect(result.name).toBe("없음");
  });
});
