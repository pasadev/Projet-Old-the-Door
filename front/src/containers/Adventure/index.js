import { connect } from 'react-redux';

import {
  fetchAdventureSelected,
  saveAdventureSelected,
  fetchAdventureTimer,
  saveAdventureTimer,
} from 'src/actions/adventures';
import { redirectOff } from 'src/actions/storyCreation';
import { displayLoader } from 'src/actions/utils';

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
});

export default connect(mapStateToProps, mapDispatchToProps)(Adventure);
