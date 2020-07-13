import { connect } from 'react-redux';
import Register from 'src/components/Register';
import { updateRegistersField, createLogin } from 'src/actions/user';

const mapStateToProps = (state) => ({

  emailRegister: state.user.register.emailRegister,
  first: state.user.register.password.first,
  firstname: state.user.register.firstname,
  lastname: state.user.register.lastname,
  nickname: state.user.register.nickname,
  second: state.user.register.password.second,
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
