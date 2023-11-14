import MenuItem from "../src/domain/MenuItem.js";
import MenuItemDto from "../src/domain/dto/MenuItemDto.js";

describe("클래스 테스트", () => {
  test("MenuItem 성공적으로 생성할 수 있다.", async () => {
    const menuItemDto = new MenuItemDto("타파스", 5);

    expect(menuItemDto.name).toBe("타파스");
    expect(menuItemDto.quantity).toBe(5);
  });
  test("메뉴 수량이 1개 이상인지 검증하고 아니면 에러를 던진다.", async () => {
    try {
      new MenuItem("Menu.타파스", "타파스", 0);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe(
        "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
      );
    }
  });

  test("메뉴판에 존재하지 않는 메뉴를 입력하면 에러를 던진다.", async () => {
    try {
      new MenuItem("Menu.샹그리아", "샹그리아", 0);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe(
        "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
      );
    }
  });
});
