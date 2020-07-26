import { connect } from 'react-redux';

import {

} from 'src/actions/storyEdit';

import Architecture from 'src/components/StoryEdit/Architecture';

// === mapStateToProps
const mapStateToProps = (state) => ({
  structureView: state.storyEdit.structureView,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Architecture);
