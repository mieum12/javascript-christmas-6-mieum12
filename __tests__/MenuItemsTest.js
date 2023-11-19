import MenuItems from "../src/domain/MenuItems.js";

describe("MenuItems 클래스 테스트", () => {
  // TODO
  // test("MenuItems 클래스를 성공적으로 생성할 수 있다.", async () => {
  //   const input = "타파스-3,레드와인-2,양송이스프-4";
  //   const menuItems = new MenuItems(input);
  //   const dto = menuItems.makeMenuItemsDto();
  //   // expect(dto[0].name).toBe("타파스");
  // });

  test("입력한 메뉴들 중 중복된 이름이 있다면 에러를 던진다.", async () => {
    const input = "해산물파스타-3,해산물파스타-3";
    try {
      new MenuItems(input);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe(
        "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
      );
    }
  });

  test("입력한 메뉴에 음료만 있을 경우 에러를 던진다.", async () => {
    const input = "레드와인-3";
    try {
      new MenuItems(input);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe(
        "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
      );
    }
  });

  test("입력한 메뉴의 총 개수가 20개가 넘으면 에러를 던진다.", async () => {
    const input = "해산물파스타-30,레드와인-10";
    try {
      new MenuItems(input);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe(
        "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
      );
    }
  });
});
