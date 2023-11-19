import { Day } from "../src/domain/Day.js";
import MenuItems from "../src/domain/MenuItems.js";
import Order from "../src/domain/Order.js";

describe("Order 클래스 테스트", () => {
  test("날짜와 메뉴 입력값을 통해 orderDto를 만들고 order 객체를 생성할 수 있다", async () => {
    //given
    const day = new Day(15);
    const menu = new MenuItems("타파스-3,레드와인-1");
    //when
    const order = new Order(day, menu);
    const orderDto = order.makeOrderDto();
    //then
    expect(orderDto.day).toBe(15);
    expect(orderDto.menuItems[0].name).toBe("타파스");
    expect(orderDto.menuItems[1].name).toBe("레드와인");
    expect(orderDto.menuItems[0].quantity).toBe(3);
    expect(orderDto.menuItems[1].quantity).toBe(1);
  });
});
