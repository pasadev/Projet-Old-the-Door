import { connect } from 'react-redux';

import { fetchAdventuresHome, saveAdventuresHome } from 'src/actions/adventures';
import { displayLoader } from 'src/actions/utils';

import Home from 'src/components/Home';

// === mapStateToProps
const mapStateToProps = (state) => ({
  adventuresHome: state.adventures.adventuresHome,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchAdventuresHome: () => {
    dispatch(fetchAdventuresHome());
  },
  saveAdventuresHome: () => {
    dispatch(saveAdventuresHome());
  },
  displayLoader: () => {
    dispatch(displayLoader());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
