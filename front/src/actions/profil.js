// === action types
export const FETCH_CREATED_ADVENTURES = 'FETCH_CREATED_ADVENTURES';
export const SAVE_CREATED_ADVENTURES = 'SAVE_CREATED_ADVENTURES';
export const FETCH_OWN_PARTIES = 'FETCH_OWN_PARTIES';
export const SAVE_OWN_PARTIES = 'SAVE_OWN_PARTIES';
export const CLEAR_PROFIL = 'CLEAR_PROFIL';

// === action creators
export const fetchCreatedAdventures = (authorId) => ({
  type: FETCH_CREATED_ADVENTURES,
  authorId,
});

export const saveCreatedAdventures = (createdAdventures) => ({
  type: SAVE_CREATED_ADVENTURES,
  createdAdventures,
});

export const fetchOwnParties = (authorId) => ({
  type: FETCH_OWN_PARTIES,
  authorId,
});

export const saveOwnParties = (ownParties) => ({
  type: SAVE_OWN_PARTIES,
  ownParties,
});

export const clearProfil = () => ({
  type: CLEAR_PROFIL,
});
