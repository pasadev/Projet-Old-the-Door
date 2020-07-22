import {
  UPDATE_CREATION_FIELD,
  SAVE_STORY_CREATE_SLUG,
} from 'src/actions/storyCreation';

const initialState = {
  title: '',
  synopsis: '',
  description: '',
  slug: '',
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

    default: return state;
  }
};

export default storyCreation;
