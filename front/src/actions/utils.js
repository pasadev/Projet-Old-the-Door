// === action types
export const TOOGLE_BURGER_MENU = 'TOOGLE_BURGER_MENU';
export const TOOGLE_BURGER_MENU_FROM_NAV = 'TOOGLE_BURGER_MENU_FROM_NAV';
export const HIDE_LOADER = 'HIDE_LOADER';
export const DISPLAY_LOADER = 'DISPLAY_LOADER';
export const REDIRECT_ON = 'REDIRECT_ON';
export const REDIRECT_OFF = 'REDIRECT_OFF';
export const TOGGLE_ASIDE_OPEN = 'TOGGLE_ASIDE_OPEN';

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

export const redirectOn = () => ({
  type: REDIRECT_ON,
});

export const redirectOff = () => ({
  type: REDIRECT_OFF,
});

export const toggleAsideOpen = () => ({
  type: TOGGLE_ASIDE_OPEN,
});
