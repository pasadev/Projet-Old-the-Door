import { connect } from 'react-redux';

import { fetchAdventureSelected, saveAdventureSelected } from 'src/actions/adventures';
import { displayLoader } from 'src/actions/utils';

import Adventure from 'src/components/Adventure';

// === mapStateToProps
const mapStateToProps = (state) => ({
  adventureSelected: state.adventures.adventureSelected,
  loading: state.utils.loading,
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
