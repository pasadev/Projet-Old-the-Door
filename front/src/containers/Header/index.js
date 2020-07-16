import { connect } from 'react-redux';

import Header from 'src/components/Header';

import { logOut } from 'src/actions/user';

import { toggleBurgerMenuFromNav } from 'src/actions/utils';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  toggleBurgerMenuFromNav: () => {
    dispatch(toggleBurgerMenuFromNav());
  },
  logOut: () => {
    dispatch(logOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
