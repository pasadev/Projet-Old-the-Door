import { connect } from 'react-redux';

import {
  updateAdventureEditField,
} from 'src/actions/storyEdit';

import ChapterEdit from 'src/components/ChapterEdit';

// === mapStateToProps
const mapStateToProps = (state) => ({
  editOption: state.storyEdit.editOption,
  chapters: state.storyEdit.chapters,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  updateField: (identifier, newValue) => {
    dispatch(updateAdventureEditField(identifier, newValue));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChapterEdit);
