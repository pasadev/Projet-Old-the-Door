// === action types
export const UPDATE_CREATION_FIELD = 'UPDATE_CREATION_FIELD';

// === action creators
export const updateCreationField = (identifier, newValue) => ({
  type: UPDATE_CREATION_FIELD,
  identifier,
  newValue,
});
