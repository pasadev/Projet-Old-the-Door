import {
  TOOGLE_BURGER_MENU,
  TOOGLE_BURGER_MENU_FROM_NAV,
  DISPLAY_LOADER,
  HIDE_LOADER,
  REDIRECT_ON,
  REDIRECT_OFF,
  TOGGLE_ASIDE_OPEN,
} from 'src/actions/utils';

const initialState = {
  burgerMenuOpen: false,
  loading: true,
  asideOpen: false,
  redirect: false,
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

    case REDIRECT_ON:
      return {
        ...state,
        redirect: true,
      };

    case REDIRECT_OFF:
      return {
        ...state,
        redirect: false,
      };

    case TOGGLE_ASIDE_OPEN:
      return {
        ...state,
        asideOpen: !state.asideOpen,
      };

    default: return state;
  }
};

export default utils;
