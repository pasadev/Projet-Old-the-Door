// === action types
export const TOOGLE_BURGER_MENU = 'TOOGLE_BURGER_MENU';
export const TOOGLE_BURGER_MENU_FROM_NAV = 'TOOGLE_BURGER_MENU_FROM_NAV';

// === action creators
export const toggleBurgerMenuOpen = () => ({
  type: TOOGLE_BURGER_MENU,
});

export const toggleBurgerMenuFromNav = () => ({
  type: TOOGLE_BURGER_MENU_FROM_NAV,
});
