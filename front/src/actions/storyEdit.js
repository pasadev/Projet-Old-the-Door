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
export const UPDATE_CHAPTER_EDIT_FIELD = 'UPDATE_CHAPTER_EDIT_FIELD';
export const CLEAR_CHAPTER_EDIT = 'CLEAR_CHAPTER_EDIT';
// Unuse export const CLEAR_EDIT_OPTION = 'CLEAR_EDIT_OPTION';
export const FETCH_PARENT_CHAPTER_POSSIBLE_OPTIONS = 'FETCH_PARENT_CHAPTER_POSSIBLE_OPTIONS';
export const SAVE_PARENT_CHAPTER_POSSIBLE_OPTIONS = 'SAVE_PARENT_CHAPTER_POSSIBLE_OPTIONS';
export const SET_PARENT_CHAPTER_CHOICE = 'SET_PARENT_CHAPTER_CHOICE';

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

export const submitAdvEditForm = (title, synopsis, description, idStory) => ({
  type: SUBMIT_ADV_EDIT_FORM,
  title,
  synopsis,
  description,
  idStory,
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
