import { connect } from 'react-redux';

import { fetchAdventuresCatalog, saveAdventuresCatalog } from 'src/actions/adventures';

import Adventure from 'src/components/Adventure';

// === mapStateToProps
const mapStateToProps = (state) => ({
  adventuresCatalog: state.adventures.adventuresCatalog,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchAdventuresCatalog: () => {
    dispatch(fetchAdventuresCatalog());
  },
  saveAdventuresCatalog: () => {
    dispatch(saveAdventuresCatalog());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Adventure);
