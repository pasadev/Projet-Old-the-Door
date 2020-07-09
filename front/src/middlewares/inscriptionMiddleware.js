import axios from 'axios';
import { REGISTER_USER, saveUser } from 'src/actions/user';

const InscriptionMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case REGISTER_USER: {
      const {
        emailRegister: email,
        passwordRegister: password,
        nickname: username,
        firstname,
        lastname,
        passwordConfirmation,
      } = store.getState().user;

      // withCredentials : autorisation d'accéder au cookie
      axios.post('http://maxence-royer.vpnuser.lan:8000/api/v0/users', {
        email,
        password,
        username,
        firstname,
        lastname,
        passwordConfirmation,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveUser(response.data.info, response.data.logged));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default InscriptionMiddleware;
