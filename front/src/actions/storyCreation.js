// === action types
export const UPDATE_CREATION_FIELD = 'UPDATE_CREATION_FIELD';
export const SUBMIT_STORY_CREATE_FORM = 'SUBMIT_STORY_CREATE_FORM';
export const REDIRECT_ON_AFTER_STORY_CREATION = 'REDIRECT_ON_AFTER_STORY_CREATION';
export const REDIRECT_OFF_AFTER_STORY_CREATION = 'REDIRECT_OFF_AFTER_STORY_CREATION';

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

export const redirectOn = () => ({
  type: REDIRECT_ON_AFTER_STORY_CREATION,
});

export const redirectOff = () => ({
  type: REDIRECT_OFF_AFTER_STORY_CREATION,
});
