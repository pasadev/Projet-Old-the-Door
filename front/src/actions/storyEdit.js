// === action types
export const FETCH_ADV_EDIT_SELECTED = 'FETCH_ADV_EDIT_SELECTED';
export const SAVE_ADV_EDIT_SELECTED = 'SAVE_ADV_EDIT_SELECTED';
export const UPDATE_ADVENTURE_EDIT_FIELD = 'UPDATE_ADVENTURE_EDIT_FIELD';
export const SUBMIT_ADV_EDIT_FORM = 'SUBMIT_ADV_EDIT_FORM';
export const SUBMIT_NEW_CHAPTER_FORM = 'SUBMIT_NEW_CHAPTER_FORM';
export const SUBMIT_CHAPTER_EDIT_FORM = 'SUBMIT_CHAPTER_EDIT_FORM';
export const FETCH_ADV_EDIT_CHAPTERS = 'FETCH_ADV_EDIT_CHAPTERS';
export const SAVE_ADV_EDIT_CHAPTERS = 'SAVE_ADV_EDIT_CHAPTERS';
export const CLEAR_STORY_EDIT = 'CLEAR_STORY_EDIT';
export const SET_EDIT_OPTION = 'SET_EDIT_OPTION';
export const FETCH_CHAPTER_EDIT_SELECTED = 'FETCH_CHAPTER_EDIT_SELECTED';
export const SAVE_CHAPTER_EDIT_SELECTED = 'SAVE_CHAPTER_EDIT_SELECTED';
export const SAVE_CHAPTER_WHITOUT_PARENT = 'SAVE_CHAPTER_WHITOUT_PARENT';
export const UPDATE_CHAPTER_EDIT_FIELD = 'UPDATE_CHAPTER_EDIT_FIELD';
export const CLEAR_CHAPTER_EDIT = 'CLEAR_CHAPTER_EDIT';
// Unuse export const CLEAR_EDIT_OPTION = 'CLEAR_EDIT_OPTION';
export const FETCH_PARENT_CHAPTER_POSSIBLE_OPTIONS = 'FETCH_PARENT_CHAPTER_POSSIBLE_OPTIONS';
export const SAVE_PARENT_CHAPTER_POSSIBLE_OPTIONS = 'SAVE_PARENT_CHAPTER_POSSIBLE_OPTIONS';
export const SET_PARENT_CHAPTER_CHOICE = 'SET_PARENT_CHAPTER_CHOICE';
export const SET_ERROR_KEY_LOCK_TRUE = 'SET_ERROR_KEY_LOCK_TRUE';
export const SET_VALIDATION_ERROR_ADV_EDIT_TRUE = 'SET_VALIDATION_ERROR_ADV_EDIT_TRUE';
export const SET_VALIDATION_ERROR_CHAP_EDIT_TRUE = 'SET_VALIDATION_ERROR_CHAP_EDIT_TRUE';
export const SET_VALIDATION_ERROR_ADV_EDIT_FALSE = 'SET_VALIDATION_ERROR_ADV_EDIT_FALSE';
export const SET_VALIDATION_ERROR_CHAP_EDIT_FALSE = 'SET_VALIDATION_ERROR_CHAP_EDIT_FALSE';
export const SHOW_STORY_STRUCTURE = 'SHOW_STORY_STRUCTURE';
export const HIDE_STORY_STRUCTURE = 'HIDE_STORY_STRUCTURE';

// === action creators
export const fetchAdvEditSelected = (slug) => ({
  type: FETCH_ADV_EDIT_SELECTED,
  slug,
});

export const saveAdventureEditSelected = (adventureEdit) => ({
  type: SAVE_ADV_EDIT_SELECTED,
  adventureEdit,
});

export const updateAdventureEditField = (identifier, newValue) => ({
  type: UPDATE_ADVENTURE_EDIT_FIELD,
  identifier,
  newValue,
});

export const updateChapterEditField = (identifier, newValue) => ({
  type: UPDATE_CHAPTER_EDIT_FIELD,
  identifier,
  newValue,
});

export const submitAdvEditForm = () => ({
  type: SUBMIT_ADV_EDIT_FORM,
});

export const submitNewChapterForm = () => ({
  type: SUBMIT_NEW_CHAPTER_FORM,
});

export const submitChapterEditForm = () => ({
  type: SUBMIT_CHAPTER_EDIT_FORM,
});

export const fetchAdvEditChapters = () => ({
  type: FETCH_ADV_EDIT_CHAPTERS,
});

export const saveAdvEditChapters = (chapters) => ({
  type: SAVE_ADV_EDIT_CHAPTERS,
  chapters,
});

export const clearStoryEdit = () => ({
  type: CLEAR_STORY_EDIT,
});

export const setEditOption = (newValue) => ({
  type: SET_EDIT_OPTION,
  newValue,
});

export const fetchChapterEditSelected = (id) => ({
  type: FETCH_CHAPTER_EDIT_SELECTED,
  id,
});

export const saveChapterEditSelected = (chapterEdit) => ({
  type: SAVE_CHAPTER_EDIT_SELECTED,
  chapterEdit,
});

// use if a chapter selected doesn't have a parentChapter
export const saveChapterWhitoutParent = (chapterEdit) => ({
  type: SAVE_CHAPTER_WHITOUT_PARENT,
  chapterEdit,
});

export const clearChapterEdit = () => ({
  type: CLEAR_CHAPTER_EDIT,
});

// unuse
// export const clearEditOption = () => ({
//   type: CLEAR_EDIT_OPTION,
// });

export const fetchParentChapterPossibleOptions = () => ({
  type: FETCH_PARENT_CHAPTER_POSSIBLE_OPTIONS,
});

export const saveParentChapterPossibleOptions = (parentChapterOption) => ({
  type: SAVE_PARENT_CHAPTER_POSSIBLE_OPTIONS,
  parentChapterOption,
});

export const setParentChapterChoice = (parentChapterChoice) => ({
  type: SET_PARENT_CHAPTER_CHOICE,
  parentChapterChoice,
});

export const setErrorKeyLockTrue = () => ({
  type: SET_ERROR_KEY_LOCK_TRUE,
});

export const setValidationErrorAdvEditTrue = () => ({
  type: SET_VALIDATION_ERROR_ADV_EDIT_TRUE,
});

export const setValidationErrorChapEditTrue = () => ({
  type: SET_VALIDATION_ERROR_CHAP_EDIT_TRUE,
});

export const setValidationErrorAdvEditFalse = () => ({
  type: SET_VALIDATION_ERROR_ADV_EDIT_FALSE,
});

export const setValidationErrorChapEditFalse = () => ({
  type: SET_VALIDATION_ERROR_CHAP_EDIT_FALSE,
});

export const showStoryStructure = () => ({
  type: SHOW_STORY_STRUCTURE,
});

export const hideStoryStructure = () => ({
  type: HIDE_STORY_STRUCTURE,
});
