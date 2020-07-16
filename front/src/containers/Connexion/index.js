import { connect } from 'react-redux';

// === on importe le composant de présentation
import Connexion from 'src/components/Connexion';

import { updateUserField, logIn, logOut } from 'src/actions/user';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
  loginError: state.user.loginError,
  redirect: state.utils.redirect,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (newValue, name) => {
    dispatch(updateUserField(newValue, name));
  },
  handleLogin: () => {
    dispatch(logIn());
  },
  handleLogout: () => {
    dispatch(logOut());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Connexion);
