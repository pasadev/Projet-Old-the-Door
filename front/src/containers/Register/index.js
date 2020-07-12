import { connect } from 'react-redux';
import Register from 'src/components/Register';
import { updateRegistersField, createLogin } from 'src/actions/user';

const mapStateToProps = (state) => ({

  emailRegister: state.user.emailRegister,
  passwordRegister: state.user.passwordRegister,
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  nickname: state.user.nickname,
  passwordConfirmation: state.user.passwordConfirmation,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updateRegistersField(newValue, name));
  },
  handleRegister: () => {
    dispatch(createLogin());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
