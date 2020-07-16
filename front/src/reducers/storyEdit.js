import {
  SAVE_ADV_EDIT_SELECTED,
  UPDATE_ADVENTURE_EDIT_FIELD,
  SAVE_ADV_EDIT_CHAPTERS,
  CLEAR_ADV_EDIT_CHAPTERS,
  SET_EDIT_OPTION,
  SAVE_CHAPTER_EDIT_SELECTED,
  CLEAR_CHAPTER_EDIT_FIELD,
} from 'src/actions/storyEdit';

const initialState = {
  id: '',
  title: '',
  initialTitle: '',
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
  chapters: [],
  editOption: '',
  chapterEdit: {},
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
        initialTitle: action.adventureEdit.title,
      };
    case UPDATE_ADVENTURE_EDIT_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case SAVE_ADV_EDIT_CHAPTERS:
      return {
        ...state,
        chapters: action.chapters,
      };
    case CLEAR_ADV_EDIT_CHAPTERS:
      return {
        ...state,
        chapters: [],
      };

    case SET_EDIT_OPTION:
      return {
        ...state,
        editOption: action.newValue,
      };

    case SAVE_CHAPTER_EDIT_SELECTED:
      return {
        ...state,
        chapterEdit: action.chapterEdit,
      };

    case CLEAR_CHAPTER_EDIT_FIELD:
      return {
        ...state,
        chapterEdit: {},
      };

    default: return state;
  }
};

export default storyEdit;
