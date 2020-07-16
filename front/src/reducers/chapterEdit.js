import {
  CLEAR_CHAPTER_EDIT_FIELD,
  UPDATE_CHAPTER_EDIT_FIELD,
  SAVE_CHAPTER_EDIT_SELECTED,
} from 'src/actions/storyEdit';

const initialState = {
  title: '',
  content: '',
  keyword: '',
  lockword: '',
  unlockText: '',
};

const chapterEdit = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CHAPTER_EDIT_SELECTED:
      return {
        ...action.chapterEdit,
      };

    case CLEAR_CHAPTER_EDIT_FIELD:
      return {
        title: '',
        content: '',
        keyword: '',
        lockword: '',
        unlockText: '',
      };

    case UPDATE_CHAPTER_EDIT_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    default: return state;
  }
};

export default chapterEdit;
