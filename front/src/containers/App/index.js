import { connect } from 'react-redux';

import App from 'src/components/App';

// === mapStateToProps
const mapStateToProps = (state) => ({
  burgerMenuOpen: state.utils.burgerMenuOpen,
  isLogged: state.user.isLogged,
  user: state.user.user,
  storyEdit: state.storyEdit,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
