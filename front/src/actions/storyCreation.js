// === action types
export const UPDATE_CREATION_FIELD = 'UPDATE_CREATION_FIELD';
export const SUBMIT_STORY_CREATE_FORM = 'SUBMIT_STORY_CREATE_FORM';

// === action creators
export const updateCreationField = (identifier, newValue) => ({
  type: UPDATE_CREATION_FIELD,
  identifier,
  newValue,
});

export const sumbitStoryCreate = (title, synopsis, description) => ({
  type: SUBMIT_STORY_CREATE_FORM,
  title,
  synopsis,
  description,
});
