// === action types
export const FETCH_CREATED_ADVENTURES = 'FETCH_CREATED_ADVENTURES';
export const SAVE_CREATED_ADVENTURES = 'SAVE_CREATED_ADVENTURES';

// === action creators
export const fetchCreatedAdventures = (authorId) => ({
  type: FETCH_CREATED_ADVENTURES,
  authorId,
});

export const saveCreatedAdventures = (createdAdventures) => ({
  type: SAVE_CREATED_ADVENTURES,
  createdAdventures,
});
