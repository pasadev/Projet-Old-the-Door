import {
  CLEAR_CHAPTER_EDIT_FIELD,
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
  chapterEditId: '',
  parentChapterChoice: '',
  // TODO Delete all chapterEditId stuff if it's not use
};

const chapterEdit = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CHAPTER_EDIT_SELECTED:
      return {
        ...state,
        ...action.chapterEdit,
        chapterEditId: action.chapterEdit.id,
      };

    case CLEAR_CHAPTER_EDIT_FIELD:
      return {
        title: '',
        content: '',
        keyword: '',
        lockword: '',
        unlockText: '',
        chapterEditId: '',
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
