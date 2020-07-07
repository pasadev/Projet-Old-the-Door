// === action types
export const FETCH_ADVENTURES_HOME = 'FETCH_ADVENTURES_HOME';
export const SAVE_ADVENTURES_HOME = 'SAVE_ADVENTURES_HOME';

// === action creators
export const fetchAdventuresHome = () => ({
  type: FETCH_ADVENTURES_HOME,
});

export const saveAdventuresHome = (adventuresHome) => ({
  type: SAVE_ADVENTURES_HOME,
  adventuresHome,
});
