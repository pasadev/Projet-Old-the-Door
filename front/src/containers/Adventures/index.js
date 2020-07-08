import { connect } from 'react-redux';

import { fetchAdventuresCatalog, saveAdventuresCatalog } from 'src/actions/adventures';
import { displayLoader } from 'src/actions/utils';

import Adventures from 'src/components/Adventures';

// === mapStateToProps
const mapStateToProps = (state) => ({
  adventuresCatalog: state.adventures.adventuresCatalog,
  loading: state.utils.loading,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchAdventuresCatalog: () => {
    dispatch(fetchAdventuresCatalog());
  },
  saveAdventuresCatalog: () => {
    dispatch(saveAdventuresCatalog());
  },
  displayLoader: () => {
    dispatch(displayLoader());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Adventures);
