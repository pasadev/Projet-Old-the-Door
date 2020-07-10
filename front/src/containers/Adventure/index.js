import { connect } from 'react-redux';

import { fetchAdventureSelected, saveAdventureSelected } from 'src/actions/adventures';
import { displayLoader } from 'src/actions/utils';

import Adventure from 'src/components/Adventure';

// === mapStateToProps
const mapStateToProps = (state) => ({
  loading: state.utils.loading,
  adventureSelected: state.adventures.adventureSelected,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Adventure);
