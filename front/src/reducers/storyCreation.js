import { UPDATE_CREATION_FIELD } from 'src/actions/storyCreation';

const initialState = {
  title: '',
  synopsis: '',
  description: '',
};

const storyCreation = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CREATION_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    default: return state;
  }
};

export default storyCreation;
