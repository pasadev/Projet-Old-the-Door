import {
  TOOGLE_BURGER_MENU,
  TOOGLE_BURGER_MENU_FROM_NAV,
  DISPLAY_LOADER,
  HIDE_LOADER,
} from 'src/actions/utils';

const initialState = {
  burgerMenuOpen: false,
  loading: true,
};

const utils = (state = initialState, action = {}) => {
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

    case DISPLAY_LOADER:
      return {
        ...state,
        // change loading to false to hide the loader
        loading: true,
      };

    case HIDE_LOADER:
      return {
        ...state,
        // change loading to false to hide the loader
        loading: false,
      };

    default: return state;
  }
};

export default utils;
