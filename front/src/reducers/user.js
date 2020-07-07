import { UPDATE_REGISTER_FIELD } from 'src/actions/user';

const initialState = {
  email: '',
  password: '',
  passwordConfirmation: '',
  firstname: '',
  lastname: '',
  nickname: '',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_REGISTER_FIELD: {
      return {
        ...state,
        [action.name]: action.newValue,
      };
    }

    default: return state;
  }
};
export default user;
