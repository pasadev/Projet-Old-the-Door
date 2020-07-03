import { TOOGLE_BURGER_MENU } from 'src/actions/burgerMenu';

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

    default: return state;
  }
};

export default burgerMenu;
