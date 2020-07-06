import { connect } from 'react-redux';

import BurgerMenu from 'src/components/BurgerMenu';

import { toggleBurgerMenuOpen } from 'src/actions/burgerMenu';

// === mapStateToProps
const mapStateToProps = (state) => ({
  burgerMenuOpen: state.burgerMenu.burgerMenuOpen,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  toggleBurgerMenuOpen: () => {
    dispatch(toggleBurgerMenuOpen());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);
