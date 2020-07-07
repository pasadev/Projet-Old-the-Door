// === action types
export const FETCH_ADVENTURES_HOME = 'FETCH_ADVENTURES_HOME';
export const SAVE_ADVENTURES_HOME = 'SAVE_ADVENTURES_HOME';
export const FETCH_ADVENTURES_CATALOG = 'FETCH_ADVENTURES_CATALOG';
export const SAVE_ADVENTURES_CATALOG = 'SAVE_ADVENTURES_CATALOG';

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
