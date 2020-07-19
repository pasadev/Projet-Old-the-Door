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
  parentChapterChoice: '',
};

const chapterEdit = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CHAPTER_EDIT_SELECTED:
      return {
        ...state,
        ...action.chapterEdit,
      };

    case CLEAR_CHAPTER_EDIT_FIELD:
      return {
        title: '',
        content: '',
        keyword: '',
        lockword: '',
        unlockText: '',
        parentChapterChoice: '',
        createAt: '',
        forStory: {},
        parentChapter: null,
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
