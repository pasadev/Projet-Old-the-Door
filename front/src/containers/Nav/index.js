import { connect } from 'react-redux';

import Nav from 'src/components/Nav';

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
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
