import {
  SAVE_ADV_EDIT_SELECTED,
  UPDATE_ADVENTURE_EDIT_FIELD,
  SAVE_ADV_EDIT_CHAPTERS,
  CLEAR_STORY_EDIT,
  SET_EDIT_OPTION,
  // CLEAR_EDIT_OPTION,
  SAVE_PARENT_CHAPTER_POSSIBLE_OPTIONS,
} from 'src/actions/storyEdit';

const initialState = {
  idStory: '',
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
  parentChapterOption: [],
  editOption: '',
};

const storyEdit = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ADV_EDIT_SELECTED:
      return {
        ...state,
        idStory: action.adventureEdit.id,
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
    case CLEAR_STORY_EDIT:
      return {
        ...initialState,
      };

    case SET_EDIT_OPTION:
      return {
        ...state,
        editOption: action.newValue,
      };

      // unuse
      // case CLEAR_EDIT_OPTION:
      //   return {
      //     ...state,
      //     editOption: '',
      //   };

    case SAVE_PARENT_CHAPTER_POSSIBLE_OPTIONS:
      return {
        ...state,
        parentChapterOption: action.parentChapterOption,
      };

    default: return state;
  }
};

export default storyEdit;
