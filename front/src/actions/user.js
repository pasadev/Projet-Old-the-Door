// === action types
export const DO_SOMETHING = 'DO_SOMETHING';
export const UPDATE_REGISTER_FIELD = 'UPDATE_REGISTER_FIELD';
export const CREATE_LOGIN = 'CREATE_LOGIN';
// === action creators
export const doSomething = (/* newValue */) => ({
  type: DO_SOMETHING,
  /* value: newValue, */
});
export const updateRegistersField = (newValue, name) => ({
  type: UPDATE_REGISTER_FIELD,
  newValue,
  name,
});
export const createLogin = () => ({

});
