import { connect } from 'react-redux';
import Register from 'src/components/Register';
import { updateRegistersField } from 'src/actions/user';

const mapStateToProps = (state) => ({

  email: state.user.email,
  password: state.user.password,
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  nickname: state.user.nickname,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updateRegistersField(newValue, name));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
