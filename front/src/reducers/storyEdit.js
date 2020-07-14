import {
  SAVE_ADV_EDIT_SELECTED,
  UPDATE_ADVENTURE_EDIT_FIELD,
} from 'src/actions/adventureEdit';

const initialState = {
  id: '',
  title: '',
  synopsis: '',
  active: '',
  firstChapter: {
    id: '',
    title: '',
  },
  author: {
    id: '',
    username: '',
  },
  slug: '',
  description: '',
};

const storyEdit = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ADV_EDIT_SELECTED:
      return {
        ...state,
        id: action.adventureEdit.id,
        title: action.adventureEdit.title,
        synopsis: action.adventureEdit.synopsis,
        description: action.adventureEdit.description,
        slug: action.adventureEdit.slug,
        active: action.adventureEdit.active,
        firstChapter: action.adventureEdit.firstChapter,
        author: action.adventureEdit.author,
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
