// === action types
export const TOOGLE_BURGER_MENU = 'TOOGLE_BURGER_MENU';
export const TOOGLE_BURGER_MENU_FROM_NAV = 'TOOGLE_BURGER_MENU_FROM_NAV';
export const HIDE_LOADER = 'HIDE_LOADER';
export const DISPLAY_LOADER = 'DISPLAY_LOADER';

// === action creators
// == Menu Burger
export const toggleBurgerMenuOpen = () => ({
  type: TOOGLE_BURGER_MENU,
});

export const toggleBurgerMenuFromNav = () => ({
  type: TOOGLE_BURGER_MENU_FROM_NAV,
});

// == Loader
export const displayLoader = () => ({
  type: DISPLAY_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});
