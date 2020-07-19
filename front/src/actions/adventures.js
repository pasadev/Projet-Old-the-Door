// === action types
export const FETCH_ADVENTURES_HOME = 'FETCH_ADVENTURES_HOME';
export const SAVE_ADVENTURES_HOME = 'SAVE_ADVENTURES_HOME';
export const FETCH_ADVENTURES_CATALOG = 'FETCH_ADVENTURES_CATALOG';
export const SAVE_ADVENTURES_CATALOG = 'SAVE_ADVENTURES_CATALOG';
export const FETCH_ADVENTURE_SELECTED = 'FETCH_ADVENTURE_SELECTED';
export const SAVE_ADVENTURE_SELECTED = 'SAVE_ADVENTURE_SELECTED';
export const FETCH_ADVENTURES_ACTIVE_NUMBER = 'FETCH_ADVENTURES_ACTIVE_NUMBER';
export const SAVE_ADVENTURES_ACTIVE_NUMBER = 'SAVE_ADVENTURES_ACTIVE_NUMBER';
export const FETCH_ADVENTURE_TIMER = 'FETCH_ADVENTURE_TIMER';
export const SAVE_ADVENTURE_TIMER = 'SAVE_ADVENTURE_TIMER';
export const CLEAR_ADVENTURE_TIMER = 'CLEAR_ADVENTURE_TIMER';
export const ACTIVATE_STORY = 'ACTIVATE_STORY';
export const DESACTIVATE_STORY = 'DESACTIVATE_STORY';
export const DELETE_STORY = 'DELETE_STORY';
// === action creators
export const fetchAdventuresHome = () => ({
  type: FETCH_ADVENTURES_HOME,
});

export const saveAdventuresHome = (adventuresHome) => ({
  type: SAVE_ADVENTURES_HOME,
  adventuresHome,
});

export const fetchAdventuresCatalog = () => ({
  type: FETCH_ADVENTURES_CATALOG,
});

export const saveAdventuresCatalog = (adventuresCatalog) => ({
  type: SAVE_ADVENTURES_CATALOG,
  adventuresCatalog,
});

export const fetchAdventureSelected = (slug) => ({
  type: FETCH_ADVENTURE_SELECTED,
  slug,
});

export const saveAdventureSelected = (adventureSelected) => ({
  type: SAVE_ADVENTURE_SELECTED,
  adventureSelected,
});

export const fetchAdventuresActiveNumber = () => ({
  type: FETCH_ADVENTURES_ACTIVE_NUMBER,
});

export const saveAdventuresActiveNumber = (adventuresActiveNumber) => ({
  type: SAVE_ADVENTURES_ACTIVE_NUMBER,
  adventuresActiveNumber,
});
export const fetchAdventureTimer = (adventureId) => ({
  type: FETCH_ADVENTURE_TIMER,
  adventureId,
});
export const saveAdventureTimer = (adventureTimer) => ({
  type: SAVE_ADVENTURE_TIMER,
  adventureTimer,
});
export const clearAdventureTimer = () => ({
  type: CLEAR_ADVENTURE_TIMER,
});
export const activateStory = () => ({
  type: ACTIVATE_STORY,
});
export const desactivateStory = () => ({
  type: DESACTIVATE_STORY,
});
export const deleteStory = () => ({
  type: DELETE_STORY,
});
