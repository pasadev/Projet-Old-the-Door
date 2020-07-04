import { TOOGLE_BURGER_MENU, TOOGLE_BURGER_MENU_FROM_NAV } from 'src/actions/burgerMenu';

const initialState = {
  burgerMenuOpen: false,
};

const burgerMenu = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOOGLE_BURGER_MENU:
      // return a new state
      return {
        // spread the current state
        ...state,
        // reverse the value of burgerMenuOpen
        burgerMenuOpen: !state.burgerMenuOpen,
      };
    case TOOGLE_BURGER_MENU_FROM_NAV:
      // return a new state
      return {
        // spread the current state
        ...state,
        // reverse the value of burgerMenuOpen
        burgerMenuOpen: false,
      };

    default: return state;
  }
};

export default burgerMenu;
