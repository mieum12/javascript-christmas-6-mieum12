import Discounter from "./Discounter.js";
import PriceDetail from "./PriceDetail.js";
import OrderDto from "./dto/OrderDto.js";
import RewardDetail from "./RewardDetail.js";
import MenuItem from "./MenuItem.js";
import Menu from "./Menu.js";
import EventBadge from "./EventBadge.js";
import MenuItems from "./MenuItems.js";

/**
 * @description 혜택에 필요한 모든 데이터를 하나하나 모으고 그것 중 출력에 필요한 데이터를 dto로 만들어 넘기는 클래스
 */
class Order {
  /**
   * @type {Day}
   */
  #day;
  /**
   * @type {MenuItems}
   */
  #menuItems;
  /**
   * @type {PriceDetail}
   */
  #priceDetail;
  /**
   * @type {RewardDetail}
   */
  #rewardDetail;
  /**
   * @type {MenuItem}
   */
  #rewardItem;
  #eventBadge;

  /**
   * @param {Day} day
   * @param {MenuItems} menuItems
   */
  constructor(day, menuItems) {
    // 날짜와 메뉴는 가져온 것을 넣기
    // new Date(2023, 12, day);
    this.#day = day;
    this.#menuItems = menuItems;

    // 나머지 데이터는 비즈니스 로직을 통해 구하기
    this.#priceDetail = new PriceDetail(menuItems.totalPrice);
    this.#rewardDetail = new RewardDetail();
    // 아래에서 else대신 디폴트값 설정, null도 되지만 '없음'의 상태를 만들어 enum으로도 표현 가능
    // this.#rewardItem = null;
    this.#rewardItem = new MenuItem(Menu.없음, "없음", 0);
    this.#eventBadge = EventBadge.NONE;
  }

  /**
   * @return {void}
   * @description 1. 할인
   *
   * 직접 하기보다는 Discounter 위임하기
   */
  discount() {
    //할인 할 디스타운터에 정보를 주어 생성!
    const discounter = new Discounter(
      this.#priceDetail.totalPrice,
      this.#day,
      this.#menuItems.menuItems,
      this.#rewardDetail,
    );
    // 디스타운터에 할인 적용!!
    discounter.discountAll();
  }

  /**
   * @return {void}
   * @description 2. 증정 메뉴 생성 - 메뉴에 샴페인 추가, 혜택 금액에도 추가
   */
  giveRewardItem() {
    if (this.#priceDetail.totalPrice >= 120_000) {
      //메뉴에 추가하기
      // [에러]
      const rewardItem = new MenuItem(Menu.샴페인, "샴페인", 1);
      this.#rewardItem = rewardItem;
      // 혜택 금액에 추가하기
      this.#rewardDetail.applyGiftEventByTotalPrice(rewardItem.price);
    }
  }
  /**
   *
   * @return {EventBadge}
   * @description 3. 배지 증정
   *
   * 조건 별 배지를 증정하는 로직을 -> 여기 말고 이벤트배지 클래스 안에서 로직 처리하기!
   */
  giveEventBadge() {
    return EventBadge.from(this.#rewardDetail.totalRewardPrice);
  }

  /**
   * @return {OrderDto}
   * @description 출력에 필요한 주문 데이터 객체(DTO) 생성
   *
   * 전체 DTO를 여기서 생성하지 않고 3가지로 분류해서 위임한다
   *
   * 메뉴dto(MenuItemsDto),혜택dto(RewardDetailDto),금액dto(PriceDetailDto)로 나눔
   *
   * 혜택 dto에는 모든 혜택에 대한 정보가 들어있음
   * 금액 dto에는 총 금액, 혜택금액, 최종 금액이 포함됨
   */
  makeOrderDto() {
    return new OrderDto(
      this.#day.day,
      this.#menuItems.makeMenuItemsDto(),
      this.#rewardDetail.makeRewardDetailDto(),
      this.#rewardItem.makeMenuItemDto(),
      this.#priceDetail.makePriceDetailDto(),
      this.giveEventBadge(),
    );
  }
}

export default Order;
