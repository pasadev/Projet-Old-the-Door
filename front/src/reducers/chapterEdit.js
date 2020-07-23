import {
  CLEAR_CHAPTER_EDIT,
  UPDATE_CHAPTER_EDIT_FIELD,
  SAVE_CHAPTER_EDIT_SELECTED,
  SET_PARENT_CHAPTER_CHOICE,
  SET_ERROR_KEY_LOCK_TRUE,
  SAVE_CHAPTER_WHITOUT_PARENT,
  SET_VALIDATION_ERROR_CHAP_EDIT_TRUE,
  SET_VALIDATION_ERROR_CHAP_EDIT_FALSE,
} from 'src/actions/storyEdit';

const initialState = {
  title: '',
  content: '',
  keyword: '',
  lockword: '',
  unlockText: '',
  parentChapterChoice: '',
  errorKeyLock: false,
  validationErrorChapEdit: false,
};

const chapterEdit = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CHAPTER_EDIT_SELECTED:
      return {
        ...state,
        ...action.chapterEdit,
        parentChapterChoice: action.chapterEdit.parentChapter.id,
      };

    case SAVE_CHAPTER_WHITOUT_PARENT:
      return {
        ...state,
        ...action.chapterEdit,
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

    case SET_ERROR_KEY_LOCK_TRUE:
      return {
        ...state,
        errorKeyLock: true,
      };

    case SET_VALIDATION_ERROR_CHAP_EDIT_TRUE:
      return {
        ...state,
        validationErrorChapEdit: true,
      };

    case SET_VALIDATION_ERROR_CHAP_EDIT_FALSE:
      return {
        ...state,
        validationErrorChapEdit: false,
      };

    default: return state;
  }
};

export default chapterEdit;
