import { connect } from 'react-redux';

import {
  fetchAdventuresHome,
  saveAdventuresHome,
  fetchAdventuresActiveNumber,
  saveAdventuresActiveNumber,
} from 'src/actions/adventures';
import { displayLoader } from 'src/actions/utils';

import Home from 'src/components/Home';

// === mapStateToProps
const mapStateToProps = (state) => ({
  adventuresActiveNumber: state.adventures.adventuresActiveNumber,
  adventuresHome: state.adventures.adventuresHome,
  loading: state.utils.loading,
  isLogged: state.user.isLogged,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // Loader
  displayLoader: () => {
    dispatch(displayLoader());
  },

  // Adventures
  fetchAdventuresHome: () => {
    dispatch(fetchAdventuresHome());
  },
  saveAdventuresHome: () => {
    dispatch(saveAdventuresHome());
  },
  fetchAdventuresActiveNumber: () => {
    dispatch(fetchAdventuresActiveNumber());
  },
  saveAdventuresActiveNumber: () => {
    dispatch(saveAdventuresActiveNumber());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
