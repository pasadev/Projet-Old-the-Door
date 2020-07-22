// === action types
export const UPDATE_REGISTER_FIELD = 'UPDATE_REGISTER_FIELD';
export const CREATE_LOGIN = 'CREATE_LOGIN';
export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const LOG_OUT = 'LOG_OUT';
export const CHECK_LOGGED = 'CHECK_LOGGED';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const LOG_ERROR = 'LOG_ERROR';

// === action creators
export const updateUserField = (newValue, name) => ({
  type: UPDATE_USER_FIELD,
  newValue,
  name,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const logError = () => ({
  type: LOG_ERROR,
});

export const saveUser = (data, isLogged) => ({
  type: SAVE_USER,
  data,
  isLogged,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const updateRegistersField = (newValue, name) => ({
  type: UPDATE_REGISTER_FIELD,
  newValue,
  name,
});

export const registerError = () => ({
  type: REGISTER_ERROR,
});

export const createLogin = () => ({
  type: REGISTER_USER,
});
