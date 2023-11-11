import menuItems from "../MenuItems.js";

class OrderDto {
  #day;
  #menuItems;
  #totalPrice;
  #gift;
  #discountDetails;
  #totalDiscount;
  #finalPayment;
  #eventBadge;

  constructor(
    day,
    menuItems,
    totalPrice,
    gift,
    discountDetails,
    totalDiscount,
    finalPayment,
    eventBadge,
  ) {
    this.#day = day;
    this.#menuItems = menuItems;
    this.#totalPrice = totalPrice;
    this.#gift = gift;
    this.#discountDetails = discountDetails;
    this.#totalDiscount = totalDiscount;
    this.#finalPayment = finalPayment;
    this.#eventBadge = eventBadge;
  }

  get day() {
    return this.#day;
  }

  get menuItems() {
    return this.#menuItems;
  }

  get totalPrice() {
    return this.#totalPrice;
  }

  get gift() {
    return this.#gift;
  }

  get discountDetails() {
    return this.#discountDetails;
  }

  get totalDiscount() {
    return this.#totalDiscount;
  }

  get finalPayment() {
    return this.#finalPayment;
  }

  get eventBadge() {
    return this.#eventBadge;
  }
}
export default OrderDto;
