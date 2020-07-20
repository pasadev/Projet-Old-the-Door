import { connect } from 'react-redux';

import App from 'src/components/App';

// === mapStateToProps
const mapStateToProps = (state) => ({
  burgerMenuOpen: state.utils.burgerMenuOpen,
  isLogged: state.user.isLogged,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
