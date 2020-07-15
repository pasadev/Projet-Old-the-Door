// === action types
export const FETCH_ADV_EDIT_SELECTED = 'FETCH_ADV_EDIT_SELECTED';
export const SAVE_ADV_EDIT_SELECTED = 'SAVE_ADV_EDIT_SELECTED';
export const UPDATE_ADVENTURE_EDIT_FIELD = 'UPDATE_ADVENTURE_EDIT_FIELD';
export const SUBMIT_ADV_EDIT_FORM = 'SUBMIT_ADV_EDIT_FORM';
export const FETCH_ADV_EDIT_CHAPTERS = 'FETCH_ADV_EDIT_CHAPTERS';
export const SAVE_ADV_EDIT_CHAPTERS = 'SAVE_ADV_EDIT_CHAPTERS';

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

export const submitAdvEditForm = (title, synopsis, description, id) => ({
  type: SUBMIT_ADV_EDIT_FORM,
  title,
  synopsis,
  description,
  id,
});

export const fetchAdvEditChapters = () => ({
  type: FETCH_ADV_EDIT_CHAPTERS,
});

export const saveAdvEditChapters = (chapters) => ({
  type: SAVE_ADV_EDIT_CHAPTERS,
  chapters,
});
