// === action types
export const UPDATE_CREATION_FIELD = 'UPDATE_CREATION_FIELD';

// === action creators
export const updateCreationField = (newValue, name) => ({
  type: UPDATE_CREATION_FIELD,
  newValue,
  name,
});
