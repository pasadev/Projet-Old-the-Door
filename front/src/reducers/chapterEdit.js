import {
  CLEAR_CHAPTER_EDIT,
  UPDATE_CHAPTER_EDIT_FIELD,
  SAVE_CHAPTER_EDIT_SELECTED,
  SET_PARENT_CHAPTER_CHOICE,
} from 'src/actions/storyEdit';

const initialState = {
  title: '',
  content: '',
  keyword: '',
  lockword: '',
  unlockText: '',
  parentChapterChoice: '',
};

const chapterEdit = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CHAPTER_EDIT_SELECTED:
      return {
        ...state,
        ...action.chapterEdit,
        parentChapterChoice: action.chapterEdit.parentChapter.id,
      };

    case CLEAR_CHAPTER_EDIT:
      return {
        ...initialState,
      };

    case UPDATE_CHAPTER_EDIT_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case SET_PARENT_CHAPTER_CHOICE:
      return {
        ...state,
        parentChapterChoice: action.parentChapterChoice,
      };

    default: return state;
  }
};

export default chapterEdit;
