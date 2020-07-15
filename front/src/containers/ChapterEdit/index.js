import { connect } from 'react-redux';

import {
} from 'src/actions/storyEdit';

import ChapterEdit from 'src/components/ChapterEdit';

// === mapStateToProps
const mapStateToProps = (state) => ({
  editOption: state.storyEdit.editOption,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ChapterEdit);
