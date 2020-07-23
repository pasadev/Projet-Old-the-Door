import {
  UPDATE_CREATION_FIELD,
  SAVE_STORY_CREATE_SLUG,
  CLEAR_STORY_CREATION,
  SET_VALIDATION_ERROR_ADV_TRUE,
} from 'src/actions/storyCreation';

const initialState = {
  title: '',
  synopsis: '',
  description: '',
  slug: '',
  validationError: false,
};

const storyCreation = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CREATION_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case SAVE_STORY_CREATE_SLUG:
      return {
        ...state,
        slug: action.slug,
      };

    case CLEAR_STORY_CREATION:
      return {
        ...initialState,
      };

    case SET_VALIDATION_ERROR_ADV_TRUE:
      return {
        ...state,
        validationError: true,
      };

    default: return state;
  }
};

export default storyCreation;
