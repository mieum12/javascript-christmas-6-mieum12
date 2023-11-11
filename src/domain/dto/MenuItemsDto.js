class MenuItemsDto {
  #totalMenus;
  constructor(totalMenu) {
    this.#totalMenus = totalMenu;
  }

  get totalMenus() {
    return this.#totalMenus;
  }
}

export default MenuItemsDto;
