// === action types
export const FETCH_ADVENTURES_HOME = 'FETCH_ADVENTURES_HOME';
export const SAVE_ADVENTURES_HOME = 'SAVE_ADVENTURES_HOME';
export const FETCH_ADVENTURES_CATALOG = 'FETCH_ADVENTURES_CATALOG';
export const SAVE_ADVENTURES_CATALOG = 'SAVE_ADVENTURES_CATALOG';
export const FETCH_ADVENTURE_SELECTED = 'FETCH_ADVENTURE_SELECTED';
export const SAVE_ADVENTURE_SELECTED = 'SAVE_ADVENTURE_SELECTED';

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
