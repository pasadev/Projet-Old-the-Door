import { connect } from 'react-redux';

import BurgerMenu from 'src/components/BurgerMenu';

import { toggleBurgerMenuOpen } from 'src/actions/utils';

// === mapStateToProps
const mapStateToProps = (state) => ({
  burgerMenuOpen: state.utils.burgerMenuOpen,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  toggleBurgerMenuOpen: () => {
    dispatch(toggleBurgerMenuOpen());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);
