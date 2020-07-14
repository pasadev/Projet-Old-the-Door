import {
  SAVE_ADV_EDIT_SELECTED,
  UPDATE_ADVENTURE_EDIT_FIELD,
} from 'src/actions/adventureEdit';

const initialState = {
  title: '',
  synopsis: '',
  description: '',
};

const storyEdit = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ADV_EDIT_SELECTED:
      return {
        ...state,
        title: action.adventureEdit.title,
        synopsis: action.adventureEdit.synopsis,
        description: action.adventureEdit.description,
      };
    case UPDATE_ADVENTURE_EDIT_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    default: return state;
  }
};

export default storyEdit;
