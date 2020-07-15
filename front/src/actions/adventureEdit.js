// === action types
export const FETCH_ADV_EDIT_SELECTED = 'FETCH_ADV_EDIT_SELECTED';
export const SAVE_ADV_EDIT_SELECTED = 'SAVE_ADV_EDIT_SELECTED';
export const UPDATE_ADVENTURE_EDIT_FIELD = 'UPDATE_ADVENTURE_EDIT_FIELD';
export const SUBMIT_ADV_EDIT_FORM = 'SUBMIT_ADV_EDIT_FORM';

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

export const submitAdvEditForm = (title, synopsis, description) => ({
  type: SUBMIT_ADV_EDIT_FORM,
  title,
  synopsis,
  description,
});
