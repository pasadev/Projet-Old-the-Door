import { connect } from 'react-redux';

import {
  showStructure,
} from 'src/actions/storyEdit';

import Architecture from 'src/components/StoryEdit/Architecture';

// === mapStateToProps
const mapStateToProps = (state) => ({
  structureView: state.storyEdit.structureView,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  showStructure: () => {
    dispatch(showStructure());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Architecture);
