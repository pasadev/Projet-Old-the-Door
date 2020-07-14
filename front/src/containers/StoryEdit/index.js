import { connect } from 'react-redux';

import { displayLoader } from 'src/actions/utils';
import {
  fetchAdvEditSelected,
  // sumbitStoryCreate,
} from 'src/actions/adventureEdit';

import StoryEdit from 'src/components/StoryEdit';

// === mapStateToProps
const mapStateToProps = (state) => ({
  loading: state.utils.loading,
  storyEdit: state.storyEdit,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchAdvEditSelected: (slug) => {
    dispatch(fetchAdvEditSelected(slug));
  },
  displayLoader: () => {
    dispatch(displayLoader());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryEdit);
