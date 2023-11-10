import MenuCategory from './MenuCategory.js';

const Menu = Object.freeze({
  양송이수프: {
    name: '양송이수프',
    price: '6_000',
    category: MenuCategory.APPETIZER,
  },
  타파스: { name: '타파스', price: '5_500', category: MenuCategory.APPETIZER },
  시저샐러드: {
    name: '시저샐러드',
    price: '8_000',
    category: MenuCategory.APPETIZER,
  },

  티본스테이크: {
    name: '티본스테이크',
    price: '55_000',
    category: MenuCategory.MAIN,
  },
  바비큐립: { name: '바비큐립', price: '54_000', category: MenuCategory.MAIN },
  해산물파스타: {
    name: '해산물파스타',
    price: '35_000',
    category: MenuCategory.MAIN,
  },
  크리스마스파스타: {
    name: '크리스마스파스타',
    price: '25_000',
    category: MenuCategory.MAIN,
  },

  초코케이크: {
    name: '초코케이크',
    price: '15_000',
    category: MenuCategory.DESSERT,
  },
  아이스크림: {
    name: '아이스크림',
    price: '5_000',
    category: MenuCategory.DESSERT,
  },

  제로콜라: {
    name: '제로콜라',
    price: '3_000',
    category: MenuCategory.BEVERAGE,
  },
  레드와인: {
    name: '레드와인',
    price: '60_000',
    category: MenuCategory.BEVERAGE,
  },
  샴페인: { name: '샴페인', price: '25_000', category: MenuCategory.BEVERAGE },
});

export default Menu;
