import { connect } from 'react-redux';

import {
  fetchAdventureSelected,
  saveAdventureSelected,
  fetchAdventureTimer,
  saveAdventureTimer,
  clearAdventureTimer,
  activateStory,
} from 'src/actions/adventures';
import { displayLoader, redirectOff } from 'src/actions/utils';


import Adventure from 'src/components/Adventure';

// === mapStateToProps
const mapStateToProps = (state) => ({
  loading: state.utils.loading,
  adventureSelected: state.adventures.adventureSelected,
  adventureTimer: state.adventures.adventureTimer,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchAdventureSelected: (slug) => {
    dispatch(fetchAdventureSelected(slug));
  },
  saveAdventureSelected: () => {
    dispatch(saveAdventureSelected());
  },
  displayLoader: () => {
    dispatch(displayLoader());
  },
  redirectOff: () => {
    dispatch(redirectOff());
  },
  fetchAdventureTimer: () => {
    dispatch(fetchAdventureTimer());
  },
  saveAdventureTimer: () => {
    dispatch(saveAdventureTimer());
  },
  clearAdventureTimer: () => {
    dispatch(clearAdventureTimer());
  },
  activateStory: () => {
    dispatch(activateStory());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Adventure);
