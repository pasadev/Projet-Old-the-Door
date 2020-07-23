// === action types
export const UPDATE_CREATION_FIELD = 'UPDATE_CREATION_FIELD';
export const SUBMIT_STORY_CREATE_FORM = 'SUBMIT_STORY_CREATE_FORM';
export const SAVE_STORY_CREATE_SLUG = 'SAVE_STORY_CREATE_SLUG';
export const CLEAR_STORY_CREATION = 'CLEAR_STORY_CREATION';
export const SET_VALIDATION_ERROR_ADV_TRUE = 'SET_VALIDATION_ERROR_ADV_TRUE';

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

export const saveStoryCreateSlug = (slug) => ({
  type: SAVE_STORY_CREATE_SLUG,
  slug,
});

export const clearStoryCreation = () => ({
  type: CLEAR_STORY_CREATION,
});

export const setValidationErrorAdvTrue = () => ({
  type: SET_VALIDATION_ERROR_ADV_TRUE,
});
