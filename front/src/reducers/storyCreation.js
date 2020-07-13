import {
  UPDATE_CREATION_FIELD,
  REDIRECT_ON_AFTER_STORY_CREATION,
  REDIRECT_OFF_AFTER_STORY_CREATION,
} from 'src/actions/storyCreation';

const initialState = {
  title: '',
  synopsis: '',
  description: '',
  redirect: false,
};

const storyCreation = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CREATION_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case REDIRECT_ON_AFTER_STORY_CREATION:
      return {
        ...state,
        redirect: true,
      };

    case REDIRECT_OFF_AFTER_STORY_CREATION:
      return {
        ...state,
        redirect: false,
      };

    default: return state;
  }
};

export default storyCreation;
