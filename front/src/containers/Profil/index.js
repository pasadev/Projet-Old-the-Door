import { connect } from 'react-redux';

import Profil from 'src/components/Profil';

import { redirectOff, displayLoader } from 'src/actions/utils';

import { fetchCreatedAdventures, fetchOwnParties } from 'src/actions/profil';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  showCreatedAdventures: state.profil.showCreatedAdventures,
  createdAdventures: state.profil.createdAdventures,
  ownParties: state.profil.ownParties,

  userInfo: state.user.user,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  redirectOff: () => {
    dispatch(redirectOff());
  },

  displayLoader: () => {
    dispatch(displayLoader());
  },

  fetchCreatedAdventures: (authorId) => {
    dispatch(fetchCreatedAdventures(authorId));
  },
  fetchOwnParties: (authorId) => {
    dispatch(fetchOwnParties((authorId)));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
