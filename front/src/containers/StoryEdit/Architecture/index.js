import { connect } from 'react-redux';

import {
  showStoryStructure,
  hideStoryStructure,
} from 'src/actions/storyEdit';

import Architecture from 'src/components/StoryEdit/Architecture';

// === mapStateToProps
const mapStateToProps = (state) => ({
  structureView: state.storyEdit.structureView,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  showStoryStructure: () => {
    dispatch(showStoryStructure());
  },
  hideStoryStructure: () => {
    dispatch(hideStoryStructure());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Architecture);
